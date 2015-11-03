(function(){
  'use strict';

  angular
    .module('cups.core')
    .service('cupsApi', CupsApi);

    CupsApi.$inject = ['$http', 'snackbar'];
    function CupsApi($http, snackbar) {

      this.create       = create;
      this.getAll       = getAll;
      this.getBy        = getBy;
      this.drinksACup   = drinksACup;
      this.getsAFreeCup = getsAFreeCup;

      function create(cupper) {
        $http.post('/api/cupper/', cupper)
             .then(function(response){
               snackbar({content: response.data});
             })
             .catch(function(error){
               snackbar({content: error.data});
             });
      }

      function getAll() {
        return $http
          .get('/api/cuppers/')
          .then(function (response){
            return response.data;
          })
          .catch(function (error){
            snackbar({ 'content' : error.data });
          });
      }


    function getBy(matriculationNumber){
      return $http
        .get('/api/cupper/' + matriculationNumber)
        .then(function (response){
          return response.data;
        })
        .catch(function (error){
          snackbar({ 'content' : error.data });
        });
    }

    function drinksACup(cupper) {
      return $http
        .put('/api/cupper/drinksACup', cupper)
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          snackbar({ 'content' : error.data });
        });
    }

    function getsAFreeCup(cupper) {

      return $http
        .put('/api/cupper/getsAFreeCup', cupper)
        .then(function (response) {
          return response.data;
        })
        .catch(function (error) {
          snackbar({ 'content' : error.data });
        });
    }

  }
}());
