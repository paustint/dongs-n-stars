(function() {
'use strict';

  angular
    .module('app.stats')
    .controller('StatsController', StatsController);

  StatsController.$inject = ['$sce','$q','Stats', 'Toast', 'Logger'];
  function StatsController($sce, $q, Stats, Toast, Logger) {
    var vm = this;

    // 7: {
    //   numDays: 7,
    //   dongs: [],
    //   rockstars: []
    // }
    vm.mostPoints = {};
    vm.names = {
      dong: 'Dong Miesters',
      rockstar: 'Rockstars'
    };

    vm.loading = {
      loading: true,
      error: null,
      animate: true
    };
    vm.rockstarTemplate = '/stats/stats.popup.html';

    vm.getMessagesHtml = getMessagesHtml;

    activate();

    ////////////////

    function activate() {
      var promises = [];
      promises.push(getStats(1, true));
      promises.push(getStats(3));
      promises.push(getStats(5));
      promises.push(getStats(7));
      promises.push(getStats(14));
      promises.push(getStats(30));
      $q.all(promises).then(function(){
        vm.loading.loading = false;
      }, function(){
        vm.loading.animate = false;
        vm.loading.error = 'danger';
      });
    }

    function getStats(numDays, isOpen) {
      return $q(function(resolve, reject){
        isOpen = isOpen || false;
        // build query strings as needed
        Stats.getStats({numDays: numDays})
        .then(function(stats) {
          vm.mostPoints[numDays] = stats.data;
          vm.mostPoints[numDays].isOpen = isOpen;
          addMessages(vm.mostPoints[numDays].dongs, 'dongs');
          addMessages(vm.mostPoints[numDays].rockstars, 'rockstars');
          Logger.debug('vm.mostPoints - '+numDays, vm.mostPoints);
          resolve();
        })
        .catch(function(response){
          Toast.show('error', 'Error', response.data);
          reject();
        });
      });
    }

    function addMessages(points, type) {
      points.forEach(function(point) {
        point.messages = getMessagesHtml(point[type]);
      });
    }

    function getMessagesHtml(pointArray) {
      var hasMsg = false;
      var html = '<ol style=" padding-left:5px;">';
      pointArray.forEach(function(element) {
        if (element.message) {
          hasMsg = true;
          html += '<li>'+element.message+'</li>';
        }
      });
      html += '</ol>';
      if (hasMsg) {
        return $sce.trustAsHtml(html);
      } else {
        return false;
      }

    }
  }
})();