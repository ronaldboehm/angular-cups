(function(){
  'use strict';

  angular
    .module('cups.cupper')
    .config(routes);

  routes.$inject = ['$stateProvider', '$urlRouterProvider'];
  function routes($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('welcome', {
      url: '/welcome',
      templateUrl: './cupper/welcomeCupper.html',
      controller: 'cupperController as cupper'
    });

    $urlRouterProvider
      .when('/welcome-a-new-cupper', '/welcome')
      .when('/', '/dashboard')
      // otherwise nur verwenden, wenn auf eine 404-Seite umleiten möchte
      .when('', '/dashboard');
  }
}());
