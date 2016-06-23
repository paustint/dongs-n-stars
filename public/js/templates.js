angular.module("app.templates").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!doctype html>\r\n<html>\r\n<head>\r\n  <base href=\"/\">\r\n  <meta charset=\"utf-8\" />\r\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <title>Dongs N Stars</title>\r\n  <link rel=\"stylesheet\" href=\"/bootstrap/dist/css/bootstrap.css\">\r\n  <link rel=\"stylesheet\" href=\"/angularjs-toaster/toaster.css\">\r\n  <link rel=\"stylesheet\" href=\"/css/main.css\">\r\n\r\n</head>\r\n<body ng-app=\"app\">\r\n  <div ng-include src=\"\'layout/header.html\'\"></div>\r\n  <toaster-container \r\n    toaster-options=\"{\'close-button\': true, \'position-class\': \'toast-top-left\'}\">\r\n  </toaster-container>\r\n  <div ng-view></div>\r\n  <div ng-include src=\"\'layout/footer.html\'\"></div>\r\n\r\n  <script src=\"/js/lib/jquery.js\"></script>\r\n  <script src=\"/bootstrap/dist/js/bootstrap.js\"></script>\r\n  <script src=\"/angular/angular.js\"></script>\r\n  <script src=\"/angular-animate/angular-animate.js\"></script>\r\n  <script src=\"/angular-touch/angular-touch.js\"></script>\r\n  <script src=\"/angular-route/angular-route.js\"></script>\r\n  <script src=\"/angularjs-toaster/toaster.js\"></script>\r\n  <script src=\"/angular-ui-bootstrap/dist/ui-bootstrap.js\"></script>\r\n  <script src=\"/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js\"></script>\r\n  <script src=\"/satellizer/satellizer.js\"></script>\r\n  <script src=\"https://cdn.socket.io/socket.io-1.2.0.js\"></script>\r\n  <script src=\"/js/application.js\"></script>\r\n  <script src=\"/js/templates.js\"></script>\r\n\r\n  <!-- Google Analytics: change UA-XXXXX-X to be your site\'s ID. -->\r\n  <!--<script>\r\n    (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=\r\n      function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;\r\n      e=o.createElement(i);r=o.getElementsByTagName(i)[0];\r\n      e.src=\'https://www.google-analytics.com/analytics.js\';\r\n      r.parentNode.insertBefore(e,r)}(window,document,\'script\',\'ga\'));\r\n    ga(\'create\',\'UA-XXXXX-X\',\'auto\');ga(\'send\',\'pageview\');\r\n  </script>-->\r\n</body>\r\n</html>\r\n");
$templateCache.put("auth/activate.html","<div class=\"container\">\r\n\r\n</div>\r\n");
$templateCache.put("auth/forgot.html","<div class=\"container\">\r\n  <div class=\"panel\">\r\n    <div class=\"panel-body\">\r\n      <form ng-submit=\"vm.forgotPassword()\">\r\n        <legend>Forgot Password</legend>\r\n        <div class=\"form-group\">\r\n          <p>Enter your email address below and we\'ll send you password reset instructions.</p>\r\n          <label for=\"email\">Email</label>\r\n          <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Email\" class=\"form-control\" ng-model=\"vm.user.email\" autofocus>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-success\">Reset Password</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>");
$templateCache.put("auth/login.html","<div class=\"login-container\">\r\n  <div class=\"panel\">\r\n    <div class=\"panel-body\">\r\n      <form ng-submit=\"vm.login()\">\r\n        <legend>Log In</legend>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Email\" class=\"form-control\" ng-model=\"vm.user.email\" autofocus>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\" class=\"form-control\" ng-model=\"vm.user.password\">\r\n        </div>\r\n        <div class=\"form-group\"><a href=\"/forgot\"><strong>Forgot your password?</strong></a></div>\r\n        <button type=\"submit\" class=\"btn btn-success\">Log in</button>\r\n      </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p class=\"text-center\">\r\n    Don\'t have an account? <a href=\"/signup\"><strong>Sign up</strong></a>\r\n  </p>\r\n</div>\r\n");
$templateCache.put("auth/reset.html","<div class=\"container\">\r\n  <div class=\"panel\">\r\n    <div class=\"panel-body\">\r\n        <form ng-submit=\"vm.resetPassword()\">\r\n          <legend>Reset Password</legend>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">New Password</label>\r\n            <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"New password\" class=\"form-control\" ng-model=\"vm.user.password\" autofocus>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"confirm\">Confirm Password</label>\r\n            <input type=\"password\" name=\"confirm\" id=\"confirm\" placeholder=\"Confirm password\" class=\"form-control\" ng-model=\"vm.user.confirm\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-success\">Change Password</button>\r\n          </div>\r\n        </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
$templateCache.put("auth/signup.html","<div class=\"login-container\">\r\n  <div class=\"panel\">\r\n    <div class=\"panel-body\">\r\n      <form ng-submit=\"vm.signup()\">\r\n        <legend>Create an account</legend>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Name\" class=\"form-control\" ng-model=\"vm.user.name\" autofocus>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Email\" class=\"form-control\" ng-model=\"vm.user.email\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\" class=\"form-control\" ng-model=\"vm.user.password\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <small class=\"text-muted\">By signing up, you agree to the <a href=\"/\">Terms of Service</a>.</small>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-success\" ng-disabled=\"vm.buttonDisable\">Create an account</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <p class=\"text-center\">\r\n    Already have an account? <a href=\"/login\"><strong>Log in</strong></a>\r\n  </p>\r\n</div>\r\n");
$templateCache.put("layout/404.html","<div class=\"container text-center\">\r\n  <h1>404</h1>\r\n  <p>Page Not Found</p>\r\n</div>");
$templateCache.put("layout/footer.html","<footer>\r\n  <p>© 2016 atg, Inc. All Rights Reserved.</p>\r\n</footer>");
$templateCache.put("layout/header.html","<nav ng-controller=\"HeaderController as vm\" class=\"navbar navbar-default navbar-static-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" class=\"navbar-toggle collapsed\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a href=\"/\" class=\"navbar-brand\">Dongs N Stars</a>\r\n    </div>\r\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li ng-class=\"{ active: vm.isActive(\'/\')}\"><a href=\"/\">Home</a></li>\r\n        <li ng-show=\"vm.isAuthenticated()\" ng-class=\"{ active: vm.isActive(\'/pointBoard\')}\"><a href=\"/pointBoard\">Point Board</a></li>\r\n        <!--<li ng-class=\"{ active: vm.isActive(\'/allActivity\')}\"><a href=\"/allActivity\">All Activity</a></li>-->\r\n        <li ng-show=\"vm.isAuthenticated()\" ng-class=\"{ active: vm.isActive(\'/stats\')}\"><a href=\"/stats\">Stats</a></li>\r\n      </ul>\r\n      <ul ng-if=\"vm.isAuthenticated()\" class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"dropdown\">\r\n          <a href=\"#\" data-toggle=\"dropdown\" class=\"navbar-avatar dropdown-toggle\">\r\n            <img ng-src=\"{{vm.currentUser.picture || vm.currentUser.gravatar}}\"> {{vm.currentUser.name || vm.currentUser.email || vm.currentUser.id}} <i class=\"caret\"></i>\r\n          </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a href=\"/account\">My Account</a></li>\r\n            <li class=\"divider\"></li>\r\n            <li><a href=\"#\" ng-click=\"vm.logout()\"}>Logout</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n      <ul ng-if=\"!vm.isAuthenticated()\" class=\"nav navbar-nav navbar-right\">\r\n        <li ng-class=\"{ active: vm.isActive(\'/login\')}\"><a href=\"/login\">Log in</a></li>\r\n        <li ng-class=\"{ active: vm.isActive(\'/signup\')}\"><a href=\"/signup\">Sign up</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n");
$templateCache.put("layout/home.html","<div class=\"container\">\r\n  <div class=\"row\">\r\n    <h1>Dongs N Stars</h1>\r\n    <p ng-show=\"!vm.isAuthenticated()\">Please register or sign-in to participate</p>\r\n    <span ng-show=\"vm.isAuthenticated()\">\r\n      <p class=\"lead\">Click on the \'Point Board\' to dish out some dong points\r\n      or to give some rockstar nominations!  You get up to 5 votes per day to add/remove dong points or rockstars nominations. </p>\r\n      <p>Feedback is great!  Issues and enhancement requests can be made here:\r\n        <a href=\"https://github.com/paustint/dongs-n-stars/issues\" target=\"_blank\">https://github.com/paustint/dongs-n-stars/issues</a></p>\r\n    </span>\r\n  </div>\r\n</div>\r\n\r\n\r\n");
$templateCache.put("point-board/point-board.html","<div class=\"container-fluid\">\r\n  <div class=\"column\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">\r\n            <div class=\"panel-title\">Give a point <span>to {{vm.user.name}}</span>\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-default pull-right\"\r\n                ng-class=\"{active: vm.isVisible(\'givePoint\')}\"\r\n                ng-click=\"vm.toggleShow(\'givePoint\')\"\r\n                aria-label=\"Toggle Hide/Show\">\r\n                <span\r\n                  class=\"glyphicon glyphicon-eye-open\"\r\n                  ng-class=\"{\'glyphicon-eye-open\': vm.show.givePoint, \'glyphicon-eye-close\': !vm.show.givePoint}\"\r\n                  aria-hidden=\"true\">\r\n                </span>\r\n              </button>\r\n            </div>\r\n            </div>\r\n              <div class=\"panel-body\" ng-show=\"vm.show.givePoint\" style=\"overflow-y: scroll; min-height: 350px; max-height: 450px;\">\r\n                <div class=\"Column\">\r\n                  <div class=\"row\" style=\"padding-top: 15px\" ng-show=\"vm.loading.users\">\r\n                    <uib-progressbar type=\"{{vm.loading.error}}\" class=\"progress-striped\" ng-class=\"{active: vm.loading.animate}\" max=\"100\" value=\"100\">\r\n                  </div>\r\n                <div class=\"row\" style=\"max-height:350px;\">\r\n\r\n                  <ul class=\"list-group\">\r\n                    <a class=\"list-group-item\"\r\n                    ng-repeat=\"user in vm.users | orderBy: \'name\'\"\r\n                    ng-click=\"vm.selectUser(user)\"\r\n                    ng-class=\"{active: user === vm.user}\">\r\n                      <span\r\n                        uib-tooltip=\"{{user.name}} is logged in\"\r\n                        tooltip-placement=\"right\"\r\n                        class=\"glyphicon glyphicon-user text-success\"\r\n                        aria-hidden=\"true\"\r\n                        ng-show=\"user.loggedIn\"\r\n                        style=\"color: blue;\">\r\n                      </span>\r\n                      <span\r\n                        uib-tooltip=\"{{user.name}} is not be logged in\"\r\n                        tooltip-placement=\"right\"\r\n                        class=\"glyphicon glyphicon-user text-muted\"\r\n                        aria-hidden=\"true\"\r\n                        ng-show=\"!user.loggedIn\">\r\n                      </span>\r\n                      <span>{{user.name}} ({{user.email}})</span>\r\n                    </a>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"panel-footer\" ng-show=\"vm.show.givePoint\">\r\n              <div class=\"column\">\r\n                <div class=\"row\">\r\n                  <span class=\"col-md-12\">\r\n                      <div class=\"form-group\">\r\n                        <textarea ng-model=\"vm.message\" class=\"form-control\" rows=\"2\" placeholder=\"{{vm.pointType}} message\"></textarea>\r\n                      </div>\r\n                    </span>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <form class=\"form-inline col-md-12\">\r\n                    <spav class=\"col-md-6\">\r\n                      <div class=\"btn-group\" data-toggle=\"buttons\">\r\n                        <label class=\"btn btn-default active\" ng-click=\"vm.setPointType(\'dong\')\">\r\n                          <input type=\"radio\" autocomplete=\"off\" ng-checked=\"vm.pointType === \'dong\'\"> Dong\r\n                        </label>\r\n                        <label class=\"btn btn-default\" ng-click=\"vm.setPointType(\'rockstar\')\">\r\n                          <input type=\"radio\" autocomplete=\"off\" ng-checked=\"vm.pointType === \'rockstar\'\"> Rockstar\r\n                        </label>\r\n                      </div>\r\n                    </spav>\r\n                    <span class=\"pull-right\" style=\"padding-right:25px;\">\r\n                      <button ng-disabled=\"vm.buttonsDisabled.point\" type=\"button\" ng-click=\"vm.createUserPoint(vm.user, vm.pointType, vm.message)\" class=\"btn btn-primary\">Submit {{vm.pointType}} point</button>\r\n                    </span>\r\n                  </form>\r\n                </div> <!-- end row -->\r\n              </div> <!-- end column -->\r\n\r\n              <!--list group-->\r\n            </div>\r\n            </div>\r\n         </div>\r\n         <!---------------------------- RECENT ACTIVITY -------------------->\r\n          <div class=\"col-md-6\">\r\n            <div class=\"panel panel-default\">\r\n              <div class=\"panel-heading\">\r\n                <div class=\"panel-title\">Recent Activity\r\n                  <button\r\n                    type=\"button\"\r\n                    class=\"btn btn-default pull-right\"\r\n                    ng-class=\"{active: vm.isVisible(\'recentActivity\')}\"\r\n                    ng-click=\"vm.toggleShow(\'recentActivity\')\"\r\n                    aria-label=\"Toggle Hide/Show\">\r\n                    <span\r\n                      class=\"glyphicon\"\r\n                      ng-class=\"{\'glyphicon-eye-open\': vm.show.recentActivity, \'glyphicon-eye-close\': !vm.show.recentActivity}\"\r\n                      aria-hidden=\"true\">\r\n                    </span>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div\r\n                class=\"panel-body\"\r\n                ng-show=\"vm.show.recentActivity\"\r\n                style=\"height: 510px; overflow-y: scroll; overflow-x: none;\">\r\n                  <div class=\"row\" style=\"padding-top: 15px\" ng-show=\"vm.loading.recent\">\r\n                    <uib-progressbar type=\"{{vm.loading.error}}\" class=\"progress-striped\" ng-class=\"{active: vm.loading.animate}\" max=\"100\" value=\"100\">\r\n                  </div>\r\n                <ul class=\"list-group\">\r\n                  <li class=\"list-group-item\"\r\n                      ng-repeat=\"recent in vm.recent | orderBy: \'-voteDate\' track by $index\"\r\n                      ng-class=\"{\'list-group-item-success\': recent.successClass}\">\r\n                    <div class=\"row\">\r\n                      <span class=\"hidden-md hidden-sm hidden-xs\">{{recent.voteDate | date: \'short\'}} - </span>\r\n                      <span>{{recent.fromUser.name}}</span>\r\n                      <span ng-class=\"recent.class\">{{recent.verb}}</span>\r\n                      <span>{{recent.toUser.name}}<span ng-show=\"recent.verb === \'removed\'\">\'s</span></span>\r\n                      <span ng-show=\"recent.verb === \'gave\'\">a</span>\r\n                      <span ng-class=\"{\'label label-danger\': recent.dong, \'label label-success\': recent.rockstar}\">{{recent.type}}</span>\r\n                      <span ng-show=\"recent.dong !== 0\"> point</span>\r\n                      <span ng-show=\"recent.rockstar !== 0\"> nomination</span>\r\n                      </span>\r\n                      <span class=\"pull-right\" ng-show=\"recent.message\">\r\n                        <span ng-class=\"{\'text-success\': true, \'label label-info\': recent.upvoteChanged}\">\r\n                          <span\r\n                            ng-click=\"vm.messageVote(recent, \'upvote\')\"\r\n                            class=\"glyphicon glyphicon-thumbs-up\"\r\n                            aria-hidden=\"true\">\r\n                          </span>\r\n                          {{recent.upvote || 0}}\r\n                        </span>\r\n                        <span ng-class=\"{\'text-danger\': true, \'label label-info\': recent.downvoteChanged}\">\r\n                          <span\r\n                            ng-click=\"vm.messageVote(recent, \'downvote\')\"\r\n                            class=\"glyphicon glyphicon-thumbs-down\"\r\n                            aria-hidden=\"true\">\r\n                          </span>\r\n                          {{recent.downvote || 0}}\r\n                        </span>\r\n                        <span\r\n                          uib-popover=\"{{recent.message}}\"\r\n                          popover-trigger=\"mouseenter click\"\r\n                          popover-placement=\"bottom-right\"\r\n                          popover-popup-close-delay=\"100\"\r\n                          popover-title=\"Message\"\r\n                          class=\"glyphicon glyphicon-comment text-primary\"\r\n                          style=\"padding-right: 10px\"\r\n                          aria-hidden=\"true\">\r\n                        </span>\r\n                      </span>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n<!-- Bottom Section Dongs and Rockstars-->\r\n  <!-- Dongs -->\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n      <div class=\"panel panel-danger\">\r\n        <div class=\"panel-heading\">\r\n          <div class=\"panel-title\">Dongs\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-default pull-right\"\r\n              ng-class=\"{active: vm.isVisible(\'dong\')}\"\r\n              ng-click=\"vm.toggleShow(\'dong\')\"\r\n              aria-label=\"Toggle Hide/Show\">\r\n              <span\r\n                class=\"glyphicon glyphicon-eye-open\"\r\n                ng-class=\"{\'glyphicon-eye-open\': vm.show.dong, \'glyphicon-eye-close\': !vm.show.dong}\"\r\n                aria-hidden=\"true\">\r\n              </span>\r\n            </button>\r\n            </div>\r\n        </div>\r\n        <div class=\"panel-body\" ng-show=\"vm.show.dong\">\r\n          <div class=\"row\" style=\"padding-top: 15px\" ng-show=\"vm.loading.dongs\">\r\n            <uib-progressbar type=\"{{vm.loading.error}}\" class=\"progress-striped\" ng-class=\"{active: vm.loading.animate}\" max=\"100\" value=\"100\">\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-striped\">\r\n              <thead>\r\n                <td>#</td>\r\n                <td>Name</td>\r\n                <td>Points</td>\r\n                <td>Action</td>\r\n              </thead>\r\n              <tbody>\r\n                <tr ng-repeat=\"point in vm.dongs | orderBy: \'-count\'\">\r\n                  <td>{{$index + 1}}</td>\r\n                  <td>{{point.name}}<br/>({{point.email}})</td>\r\n                  <td>{{point.count}}</td>\r\n                  <td>\r\n                    <!--<span ng-click=\"vm.createUserPoint(point.toUser, \'dong\')\" class=\"btn btn-warning btn-xs\">Add</span> |-->\r\n                    <span\r\n                      uib-popover-template=\"vm.popover.addDong\"\r\n                      popover-trigger=\"click\"\r\n                      popover-placement=\"top-right\"\r\n                      popover-title=\"Add Point\"\r\n                      class=\"btn btn-warning btn-xs\">Add</span> |\r\n                    <span\r\n                      uib-popover-template=\"vm.popover.removeDong\"\r\n                      popover-trigger=\"click\"\r\n                      popover-placement=\"top-right\"\r\n                      popover-title=\"Remove Point\"\r\n                      class=\"btn btn-info btn-xs\">Remove</span>\r\n                    <!--<span ng-click=\"vm.removeUserPoint(point.toUser, \'dong\')\" class=\"btn btn-info btn-xs\">Remove</span>-->\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n      <!--Rockstars -->\r\n      <div class=\"col-md-6\">\r\n        <div class=\"panel panel-success\" class=\"col-md-6\">\r\n          <div class=\"panel-heading\" class=\"col-md-6\">\r\n            <div class=\"panel-title\">Rockstars\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-default pull-right\"\r\n              ng-class=\"{active: vm.isVisible(\'rockstar\')}\"\r\n              ng-click=\"vm.toggleShow(\'rockstar\')\"\r\n              aria-label=\"Toggle Hide/Show\">\r\n              <span\r\n                class=\"glyphicon glyphicon-eye-open\"\r\n                ng-class=\"{\'glyphicon-eye-open\': vm.show.rockstar, \'glyphicon-eye-close\': !vm.show.rockstar}\"\r\n                aria-hidden=\"true\">\r\n              </span>\r\n            </button>\r\n            </div>\r\n          </div>\r\n          <div class=\"panel-body\" ng-show=\"vm.show.rockstar\">\r\n            <div class=\"row\" style=\"padding-top: 15px\" ng-show=\"vm.loading.rockstars\">\r\n              <uib-progressbar type=\"{{vm.loading.error}}\" class=\"progress-striped\" ng-class=\"{active: vm.loading.animate}\" max=\"100\" value=\"100\">\r\n            </div>\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table table-striped\">\r\n                <thead>\r\n                  <td>#</td>\r\n                  <td>Name</td>\r\n                  <td>Points</td>\r\n                  <td>Action</td>\r\n                </thead>\r\n                <tbody>\r\n                  <tr ng-repeat=\"point in vm.rockstars | orderBy: \'-count\'\">\r\n                    <td>{{$index + 1}}</td>\r\n                    <td>{{point.name}}<br/>({{point.email}})</td>\r\n                    <td>{{point.count}}</td>\r\n                    <td>\r\n                      <!--<span ng-click=\"vm.createUserPoint(point.toUser, \'rockstar\')\" class=\"btn btn-warning btn-xs\">Add</span> |\r\n                      <span ng-click=\"vm.removeUserPoint(point.toUser, \'rockstar\')\" class=\"btn btn-info btn-xs\">Remove</span>-->\r\n                    <span\r\n                      uib-popover-template=\"vm.popover.addRockstar\"\r\n                      popover-trigger=\"click\"\r\n                      popover-placement=\"top-right\"\r\n                      popover-title=\"Add Point\"\r\n                      class=\"btn btn-warning btn-xs\">Add</span> |\r\n                    <span\r\n                      uib-popover-template=\"vm.popover.removeRockstar\"\r\n                      popover-trigger=\"click\"\r\n                      popover-placement=\"top-right\"\r\n                      popover-title=\"Remove Point\"\r\n                      class=\"btn btn-info btn-xs\">Remove</span>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");
$templateCache.put("stats/stats.html","<div class=\"container-fluid\">\r\n  <h1>Dongs N Stars Champion Board</h1>\r\n  <div class=\"row\" style=\"padding-top: 15px\" ng-show=\"vm.loading.loading\">\r\n    <uib-progressbar type=\"{{vm.loading.error}}\" class=\"progress-striped\" ng-class=\"{active: vm.loading.animate}\" max=\"100\" value=\"100\">\r\n  </div>\r\n  <uib-accordion close-others=\"false\">\r\n    <div ng-repeat=\"(key, value) in vm.mostPoints\">\r\n      <uib-accordion-group is-open=\"value.isOpen\">\r\n        <uib-accordion-heading>\r\n          Last {{key}} Days <i class=\"pull-right glyphicon\" ng-class=\"{\'glyphicon-chevron-down\': value.isOpen, \'glyphicon-chevron-right\': !value.isOpen}\"></i>\r\n        </uib-accordion-heading>\r\n        <div class=\"column\">\r\n          <div class=\"col-md-6 col-sm-12\">\r\n\r\n            <ol class=\"list-item-group\">\r\n              <h2 class=\"center-block\"><small class=\"text-danger\">Dong Miesters</small></h2>\r\n              <li\r\n                ng-repeat=\"entry in value.dongs | orderBy: \'-dongs.length\'\"\r\n                class=\"list-group-item\">\r\n                <span\r\n                  class=\"badge\"\r\n                  uib-popover-html=\"entry.messages\"\r\n                  popover-trigger=\"mouseenter click\"\r\n                  popover-placement=\"bottom-right\"\r\n                  popover-enable=\"entry.messages\"\r\n                  popover-title=\"Comments\">\r\n                {{entry.dongs.length}}</span>\r\n                <span\r\n                  uib-tooltip=\"{{entry.user.email}}\"\r\n                  tooltip-placement=\"bottom\"\r\n                  tooltip-popup-delay=\"200\">\r\n                  {{entry.user.name}}\r\n                </span>\r\n              </li>\r\n            </ol>\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-12\">\r\n            <ol class=\"list-item-group\">\r\n              <h2 class=\"center-block\"><small class=\"text-success\">Rockstars</small></h2>\r\n              <li\r\n                ng-repeat=\"entry in value.rockstars | orderBy: \'-rockstars.length\'\"\r\n                class=\"list-group-item\">\r\n                <span\r\n                  class=\"badge\"\r\n                  uib-popover-html=\"entry.messages\"\r\n                  popover-trigger=\"mouseenter click\"\r\n                  popover-placement=\"bottom-right\"\r\n                  popover-enable=\"entry.messages\"\r\n                  popover-title=\"Messages\">\r\n                    {{entry.rockstars.length}}\r\n                </span>\r\n                <span\r\n                  uib-tooltip=\"{{entry.user.email}}\"\r\n                  tooltip-placement=\"bottom\"\r\n                  tooltip-popup-delay=\"200\">\r\n                  {{entry.user.name}}\r\n                </span>\r\n              </li>\r\n            </ol>\r\n          </div>\r\n        </div>\r\n      </uib-accordion-group>\r\n    </uib-accordion>\r\n  </div>\r\n</div>\r\n\r\n");
$templateCache.put("stats/stats.popup.html","<div>\r\n  <ul>\r\n    <span ng-repeat=\"item in entry.rockstars\">\r\n      <li ng-show=\"item.message\">\r\n        {{item.message}}\r\n      </li>\r\n    </span>\r\n  </ul>\r\n</div>");
$templateCache.put("user/profile.html","<div class=\"container\">\r\n  <div class=\"panel\">\r\n    <div class=\"panel-body\">\r\n      <div ng-if=\"vm.messages.error\" role=\"alert\" class=\"alert alert-danger\">\r\n        <div ng-repeat=\"error in vm.messages.error\">{{error.msg}}</div>\r\n      </div>\r\n      <div ng-if=\"vm.messages.success\" role=\"alert\" class=\"alert alert-success\">\r\n        <div ng-repeat=\"success in vm.messages.success\">{{success.msg}}</div>\r\n      </div>\r\n      <form ng-submit=\"vm.updateProfile()\" class=\"form-horizontal\">\r\n        <legend>Profile Information</legend>\r\n        <div class=\"form-group\">\r\n          <label for=\"email\" class=\"col-sm-3\">Email</label>\r\n          <div class=\"col-sm-7\">\r\n            <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"vm.profile.email\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\" class=\"col-sm-3\">Name</label>\r\n          <div class=\"col-sm-7\">\r\n            <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" ng-model=\"vm.profile.name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"location\" class=\"col-sm-3\">Location</label>\r\n          <div class=\"col-sm-7\">\r\n            <input type=\"text\" name=\"location\" id=\"location\" class=\"form-control\" ng-model=\"vm.profile.location\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-sm-offset-3 col-sm-4\">\r\n            <button ng-disabled=\"!vm.buttonEnabled.profile\" type=\"submit\" class=\"btn btn-success\">Update Profile</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel\">\r\n    <div class=\"panel-body\">\r\n      <form ng-submit=\"vm.changePassword(vm.password, vm.confirm)\" class=\"form-horizontal\">\r\n        <legend>Change Password</legend>\r\n        <div class=\"form-group\">\r\n          <label for=\"password\" class=\"col-sm-3\">New Password</label>\r\n          <div class=\"col-sm-7\">\r\n            <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"vm.password\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"confirm\" class=\"col-sm-3\">Confirm Password</label>\r\n          <div class=\"col-sm-7\">\r\n            <input type=\"password\" name=\"confirm\" id=\"confirm\" class=\"form-control\" ng-model=\"vm.confirm\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <div class=\"col-sm-4 col-sm-offset-3\">\r\n            <button ng-disabled=\"!vm.buttonEnabled.password\" type=\"submit\" class=\"btn btn-success\">Change Password</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel\">\r\n    <div class=\"panel-body\">\r\n      <form ng-submit=\"vm.deleteAccount()\" class=\"form-horizontal\">\r\n        <legend>Delete Account</legend>\r\n        <div class=\"form-group\">\r\n          <p class=\"col-sm-offset-3 col-sm-9\">You can delete your account, but keep in mind this action is irreversible.</p>\r\n          <div class=\"col-sm-offset-3 col-sm-9\">\r\n            <button ng-disabled=\"!vm.buttonEnabled.delete\" type=\"submit\" class=\"btn btn-danger\">Delete my account</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n");
$templateCache.put("point-board/popover-templates/add-dong.html","<div>\r\n    <textarea \r\n        ng-model=\"vm.pointMessage\" \r\n        class=\"form-control\" \r\n        rows=\"4\" \r\n        placeholder=\"Message\">\r\n    </textarea>\r\n\r\n    <button\r\n        ng-disabled=\"vm.buttonsDisabled.vote\"\r\n        ng-click=\"vm.createUserPoint(point.toUser, \'dong\', vm.pointMessage)\" \r\n        class=\"btn btn-warning btn-xs\">Give Point</button>\r\n</div>");
$templateCache.put("point-board/popover-templates/add-rockstar.html","<div>\r\n    <textarea \r\n        ng-model=\"vm.pointMessage\" \r\n        class=\"form-control\" \r\n        rows=\"4\" \r\n        placeholder=\"Message\">\r\n    </textarea>\r\n\r\n    <button\r\n        ng-disabled=\"vm.buttonsDisabled.vote\"\r\n        ng-click=\"vm.createUserPoint(point.toUser, \'rockstar\', vm.pointMessage)\" \r\n        class=\"btn btn-warning btn-xs\">Give Point</button>\r\n</div>");
$templateCache.put("point-board/popover-templates/remove-dong.html","<div>\r\n    <textarea \r\n        ng-model=\"vm.pointMessage\" \r\n        class=\"form-control\" \r\n        rows=\"4\" \r\n        placeholder=\"Message\">\r\n    </textarea>\r\n\r\n    <button\r\n        ng-disabled=\"vm.buttonsDisabled.vote\"\r\n        ng-click=\"vm.removeUserPoint(point.toUser, \'dong\', vm.pointMessage)\" \r\n        class=\"btn btn-info btn-xs\">Remove Point</button>\r\n</div>");
$templateCache.put("point-board/popover-templates/remove-rockstar.html","<div>\r\n    <textarea \r\n        ng-model=\"vm.pointMessage\" \r\n        class=\"form-control\" \r\n        rows=\"4\" \r\n        placeholder=\"Message\">\r\n    </textarea>\r\n\r\n    <button\r\n        ng-disabled=\"vm.buttonsDisabled.vote\"\r\n        ng-click=\"vm.removeUserPoint(point.toUser, \'rockstar\', vm.pointMessage)\" \r\n        class=\"btn btn-info btn-xs\">Remove Point</button>\r\n</div>");
$templateCache.put("services/modal/modal.html","<div class=\"modal-header\">\r\n    <h3 class=\"modal-title\">{{vm.title}}</h3>\r\n</div>\r\n<div class=\"modal-body\">\r\n    {{vm.content}}\r\n</div>\r\n<div class=\"modal-footer\">\r\n    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"vm.ok()\">{{vm.buttons.confirm}}</button>\r\n    <button class=\"btn btn-warning\" type=\"button\" ng-click=\"vm.cancel()\">{{vm.buttons.cancel}}</button>\r\n</div>");}]);