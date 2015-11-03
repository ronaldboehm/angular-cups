(function(){
  'use strict';

  angular
    .module('cups.card', ['cups.core'])
    .config(routes);

      routes.$inject = ['$stateProvider'];
      function routes($stateProvider) {
        $stateProvider
        .state('bonus-card', {
          url: '/bonus-card/{matriculationNumber}',
          templateUrl: './bonus-card/card.html',
          controller: 'cardController as card'
        });
      }
    }());
