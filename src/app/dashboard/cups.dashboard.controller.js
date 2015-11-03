(function(){
  'use strict';

  angular
    .module('cups.dashboard')
    .controller('dashboardController', DashboardController);


  DashboardController.$inject = ['cupsApi'];
  function DashboardController(cupsApi) {
    var vm = this;

    // API outlined:
    vm.cuppers = cuppers;

    function cuppers() {
      cupsApi.cuppers();
    }

  }

}());
