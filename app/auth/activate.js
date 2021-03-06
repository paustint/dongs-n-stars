(function() {
'use strict';

  angular
    .module('app.auth')
    .controller('ActivateController', ActivateController);

  ActivateController.$inject = ['$rootScope', '$location', '$window', '$auth', 'Account', 'Socket', 'Toast'];
  function ActivateController($rootScope, $location, $window, $auth, Account, Socket, Toast) {
    var vm = this;

    activate();

    ////////////////

    function activate() {
      activateAccount();
    }

    function activateAccount() {
      var token = $location.search().token;
      Account.activateAccount(token)
      .then((response) => {
        Socket.emit('users:newAccountActivated');
        $auth.setToken(response);
        $rootScope.currentUser = response.data.user;
        $window.localStorage.user = JSON.stringify(response.data.user);
        $location.path('/pointBoard');
      })
      .catch((response) => {
        Toast.show('error', 'Error', response.error || response.data);
      });
    }
  }
})();