(function(){
  'use strict';

  angular
    .module('cups.card')
    .controller('cardController', CardController);

  CardController.$inject = ['$stateParams', 'cupsApi'];

  function CardController($stateParams, cupsApi) {

    var vm = this;

    var matriculationNumber = 1234567; // $stateParams.matriculationNumber;

    vm.cupper = {};
    vm.getCupper = getCupper;
    vm.stamp = stamp;
    vm.spendAFreeCup = spendAFreeCup;

    getCupper();

    function getCupper() {

      return cupsApi
        .getBy(matriculationNumber)
        .then(function(cupper){

          vm.cupper = cupper;
          return vm.cupper;
        });
    }

    function stamp(){
      return cupsApi
        .drinksACup(vm.cupper)
        .then(function(cupper){

          vm.cupper = cupper;
          return vm.cupper;
        });
    }

    function spendAFreeCup(){
      return cupsApi
        .getsAFreeCup(vm.cupper)
        .then(function(cupper){

          vm.cupper = cupper;
          return cupper;
        });
    }
  }
}());
