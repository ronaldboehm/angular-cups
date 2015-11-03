(function(){
  'use strict';

  angular
    .module('cups.core')
    .service('cupsApi', CupsApi);

    CupsApi.$inject = ['$http', 'snackbar'];
    function CupsApi($http, snackbar) {
      var postUrl = '/api/cupper/';
      var getUrl = '/api/cuppers/';

      this.create = create;
      this.cuppers = cuppers;

      function create(cupper) {
        $http.post(postUrl, cupper)
             .then(function(response){
               snackbar({content: response.data});
             })
             .catch(function(error){
               snackbar({content: error.data});
             });
      }

      function cuppers() {
        $http.get(getUrl)
          .then(function(response){
            return response.data;
          })
          .catch(function(error){
            snackbar({content: error.data});
          });
      }

    }

}());
