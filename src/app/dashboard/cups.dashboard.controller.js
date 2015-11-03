(function(){
  'use strict';

  angular
    .module('cups.dashboard')
    .controller('dashboardController', DashboardController);


  DashboardController.$inject = ['cupsApi'];
  function DashboardController(cupsApi) {
    var vm = this;

    // API outlined:
    vm.identity = {};

    vm.create = create;

    function create() {
      cupsApi.create(vm.identity);
    }

  }

}());
