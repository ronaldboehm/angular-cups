(function(){
  'use strict';

  angular
    .module('cups.card')
    .controller('cardController', CardController);


  CardController.$inject = ['cupsApi'];
  function CardController(cupsApi) {
    var vm = this;

    // API outlined:
    // vm.identity = {};
    // vm.create = create;

  }

}());
