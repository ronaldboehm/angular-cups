(function(){
  'use strict';

  angular
    .module('cups.core')
    .service('cupsApi', CupsApi);

    CupsApi.$inject = ['$http'];
    function CupsApi($http) {
      var api = '/api/cupper/';

      this.create = create;

      function create(cupper) {
        $http.post(api, cupper)
             .then(function(response){
              console.info(response);
             })
             .catch(function(error){
               console.error(error);
             });
      }


    };

}());
