(function() {
  'use strict';

  angular
    .module('cups.card')
    .filter('toCollection', toCollection);

  function toCollection() {

    return function (input) {

      if (input && !isNaN(input))
        return new Array(input);

      return input;
    };
  }
}());
