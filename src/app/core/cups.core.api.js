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
      this.getAll = getAll;

      function create(cupper) {
        $http.post(postUrl, cupper)
             .then(function(response){
               snackbar({content: response.data});
             })
             .catch(function(error){
               snackbar({content: error.data});
             });
      }

      function getAll() {

        return $http
          .get(getUrl)
          .then(succeeded)
          .catch(failed);
        function succeeded(response){
          return response.data;
        }
        function failed(error){
          snackbar({ 'content' : error.data });
        }
      }


    }

}());
