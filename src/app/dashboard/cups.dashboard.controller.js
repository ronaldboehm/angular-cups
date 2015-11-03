(function(){
  'use strict';

  angular
    .module('cups.dashboard')
    .controller('dashboardController', DashboardController);


  DashboardController.$inject = ['cupsApi'];
  function DashboardController(cupsApi){
    var dashboard = this;

    dashboard.cuppers = [];
    dashboard.getAll = getAll;

    getAll();

    function getAll(){
      return cupsApi.getAll().then(function(cuppers){
        dashboard.cuppers = cuppers;
        return dashboard.cuppers;
      });
    }
  }
}());
