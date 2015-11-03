(function(){
  'use strict';

  angular
    .module('cups.dashboard')
    .config(routes);

  routes.$inject = ['$stateProvider'];
  function routes($stateProvider) {
    $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: './dashboard/dashboard.html',
      controller: 'dashboardController as dashboard'
    });
  }
}());
