var User = require('../models/user');
var Point = require('../models/point');
var UserPoint = require('../models/userPoint');
var UserVote = require('../models/userVote');
var PointService = require('../services/pointService');

var MAX_VOTES = process.env.MAX_VOTES || 5;
if (typeof MAX_VOTES === 'string') {
  MAX_VOTES = Number.parseInt(MAX_VOTES);
}
/**
 * 200 - OK success GET
 * 201 - created success POST
 * 203 - created success PUT
 * 204 - no content success DELETE
 * 400 bad request
 * 401 unathorized
 * 403 forbidden
 * 404 not found
 * 405 method not allowed
 */

var sendJson = function(res, status, content) {
      content = content || {};
      res.status(status);
      return res.json(content);
};

/**
 * GET /userPoints
 */
exports.getUsersPoints = function(req, res) {
  UserPoint.find({})
  .populate({path: 'user dongs rockstars', populate: {path: 'fromUser'}})
  .exec((err, userPoints) => {
    if (err) {
      return sendJson(res, 404);
    }
    deleteUserFields(userPoints);
    sendJson(res, 200, {userPoints: userPoints});
  });
};

/**
 * GET /userPoints/:id
 */
exports.getUserPoints = function(req, res) {
  var id = req.param.id;
  UserPoint.findById(id)
  .populate('user')
  .exec((err, userPoints) => {
    if (err) {
      return sendJson(res, 404);
    }
    deleteUserFields(userPoints);
    sendJson(res, 200, {userPoints: userPoints});
  });
};

/**
 * GET /userVotes
 */
exports.getUserVotes = function(req, res) {
  var limit = req.query.limit || 75;
  UserVote.find({})
  .populate('fromUser toUser')
  .limit(limit)
  .sort({voteDate: -1})
  .exec((err, userVotes) => {
    if (err) {
      return sendJson(res, 404);
    }
    sendJson(res, 200, {userVotes: userVotes});
  });
};


/**
 * POST /point
 */
exports.createUserPoint = function(req, res) {
  req.assert('pointType', 'Point type is not valid.  Valid types are dong and rockstar').notEmpty().isIn(['dong', 'rockstar']);
  req.assert('toUser', 'User is not valid').notEmpty();
  req.assert('toUser', 'You cannot modify your own points').notEqual(req.user._id);

  var errors = req.validationErrors();

  if (errors) {
    return sendJson(res, 400, errors);
  }
  var fromUserId = req.user._id;
  var pointType = req.query.pointType || req.body.pointType;
  var toUserId = req.query.toUser || req.body.toUser;
  var message = req.query.message || req.body.message || null;

  // Prepare to create usertype, save after userpoint successfully created
  var userVote = new UserVote({
    fromUser: fromUserId,
    toUser: toUserId,
    type: pointType,
    message: message
  });
  userVote[pointType] = 1;

  eligibleToVote(fromUserId)
  .then(function(recentUserVotes) {
    UserPoint.findOne({user: toUserId}, (err, userPoint) => {
      if (err) {
        return sendJson(res, 400, {msg: 'You have exceeded the max number of daily votes', error: err});
      }
      if (!userPoint) {
        userPoint = new UserPoint({
          user: toUserId
        });
      }
      var pluralPointType = pointType + 's';
      // Push point (either rockstar or dong) to userPoint
      userPoint[pluralPointType].push({
          type: pointType,
          fromUser: fromUserId,
          message: message
        });
      userPoint.save((err)=>{
        if (err) {
          return sendJson(res, 400, {msg: 'Could not save ' + pointType, error: err});
        }
        userVote.save((err) => {
          // save userVote id to userPoint
          // CONSIDER SAVING USERVOTE FIRST? SOME WAY TO CLEAN THIS UP
          ///////////////////////
          var lastIdx = userPoint[pluralPointType].length-1;
          userPoint[pluralPointType][lastIdx].userVote = userVote._id;
          // letting run async, no need to hold user up for this save
          userPoint.save((err) => {
            if (err) {
              console.log('could not save userVote id to userpoint');
            }
          });
          ////////////////////////

          UserVote.findById(userVote._id)
          .populate('fromUser toUser')
          .exec((err, userVote) => {
            var outputMsg = pointType[0].toUpperCase() + pointType.slice(1) + ' given successfully';
            return sendJson(res, 200, {msg: outputMsg, userPoints: userPoint, userVote: userVote});
          });
        });
      });
    });
  })
  .catch(function(err){
    return sendJson(res, 400, err);
  });
};

/**
 *  PUT /:userVoteId/:voteType
 */
exports.messageVote = function(req, res) {
  req.checkParams('userVoteId', 'userVote id must be a valid db id').isMongoId();
  req.checkParams('voteType', 'vote type must be either \'upvote\' or \'downvote\'').isIn(['upvote', 'downvote']);

  var errors = req.validationErrors();

  if (errors) {
    return sendJson(res, 400, errors);
  }
  
  var userVoteId = req.params.userVoteId;
  var isUpVote = req.params.voteType === 'upvote' ? true : false; 
  
  PointService.messageVoteHelper(userVoteId, isUpVote, req.user._id)
  .then((data) => {
    sendJson(res, 200, data);
  })
  .catch((err) => {
    sendJson(res, 400, err);
  });
};


/**
 * DELETE /point/:toUser/:pointType
 */
exports.removeUserPoint = function(req, res) {
  req.assert('pointType', 'Point type is not valid.  Valid types are dong and rockstar').notEmpty().isIn(['dong', 'rockstar']);
  req.assert('toUser', 'User is not valid').notEmpty();
  req.assert('toUser', 'User is not valid').notEqual(req.user._id);

  var errors = req.validationErrors();

  if (errors) {
    return sendJson(res, 400, errors);
  }
  var fromUserId = req.user._id;
  var toUserId = req.params.toUser || req.query.toUser || req.body.toUser;
  var pointType = req.params.pointType || req.query.pointType || req.body.pointType;
  var message = req.query.message || req.body.message || null;

  // Prepare to create usertype, save after userpoint successfully created
  var userVote = new UserVote({
    fromUser: fromUserId,
    toUser: toUserId,
    type: pointType,
    message: message
  });
  userVote[pointType] = -1;

  eligibleToVote(fromUserId)
  .then(function(recentUserVotes) {
    UserPoint.findOne({user: toUserId}, (err, userPoint) => {
      if (err) {
        return sendJson(res, 400, {msg: 'You have exceeded the max number of daily votes', error: err});
      }
      if (!userPoint) {
        return sendJson(res, 400, {msg: 'You cannot remove a point from a user without any points of this type', error: err});
      }

      // Push point (either rockstar or dong) to userPoint
      try {
        var pluralPointType = pointType + 's';
        userPoint[pluralPointType][0].remove();
      } catch (e) {
        return sendJson(res, 400, {msg: 'Could not remove ' + pointType, error: err});
      }

      userPoint.save((err)=>{
        if (err) {
          return sendJson(res, 400, {msg: 'Could not remove ' + pointType, error: err});
        }
        userVote.save((err) => {
          UserVote.findById(userVote._id)
          .populate('fromUser toUser')
          .exec((err, userVote) => {
            var outputMsg = pointType[0].toUpperCase() + pointType.slice(1) + ' removed successfully';
            return sendJson(res, 200, {msg: outputMsg, userPoints: userPoint, userVote: userVote});
          });
        });
      });
    });
  })
  .catch(function(err){
    return sendJson(res, 400, err);
  });
};

/**
 * Check to ensure user has not exceeded the number of daily votes
 */
function eligibleToVote(fromUserId) {
  return new Promise(function(resolve, reject) {
    var d = new Date();
    var yesterday = d.setDate(d.getDate()-1);
    UserVote.find({
      fromUser: fromUserId,
      voteDate: {$gt: yesterday}
      })
      .then((userVotes) => {
        if (userVotes.length >= MAX_VOTES) {
          return reject({msg: 'Sorry Capn\' you only get ' + MAX_VOTES + ' per day!'});
        } else {
          return resolve(userVotes);
        }
      })
      .catch((err) => {
        return reject({msg: 'Error validating number of daily votes.'});
      });
  });
}


function deleteUserFields(userPoints) {
  userPoints.map((up) => {
    delete up.user.password;
    // delete up.user.createdAt;
    // delete up.user.updatedAt;
  }, this);
}
