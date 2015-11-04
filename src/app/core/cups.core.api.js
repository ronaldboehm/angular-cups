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
      this.remove       = remove;

      function create(cupper) {
        return $http
          .post('/api/cupper/', cupper)
          .then(showResponse)
          .catch(showError);
      }

      function getAll() {
        return $http
          .get('/api/cuppers/')
          .then(returnResponse)
          .catch(showError);
      }


    function getBy(matriculationNumber){
      return $http
        .get('/api/cupper/' + matriculationNumber)
        .then(returnResponse)
        .catch(showError);
    }

    function drinksACup(cupper) {
      return $http
        .put('/api/cupper/drinksACup', cupper)
        .then(returnResponse)
        .catch(showError);
    }

    function getsAFreeCup(cupper) {

      return $http
        .put('/api/cupper/getsAFreeCup', cupper)
        .then(returnResponse)
        .catch(showError);
    }

    function remove(matriculationNumber) {
      return $http.delete('/api/cupper/' + matriculationNumber)
         .then(showResponse)
         .catch(showError);
    }

    function returnResponse(response){
      return response.data;
    }
    function showResponse(response){
      snackbar({content: response.data});
      return error.data;
    }
    function showError(error){
      snackbar({ 'content' : error.data });
      return error.data;
    }

  }
}());
