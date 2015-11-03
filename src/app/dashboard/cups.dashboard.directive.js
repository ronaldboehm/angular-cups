(function() {
  'use strict';

  angular
    .module('cups.dashboard')
    // in HTML  ws-directive
    .directive('cupsCupper', cupsCupper);

    function cupsCupper(){
      return {
        templateUrl : './dashboard/cups.dashboard.directive.tpl.html',
        scope       : {
          cupper : '=identity'
        }
      };
    }
  }());
