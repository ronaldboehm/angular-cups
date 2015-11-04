'use strict';

describe('Using the API', function() {

  var $httpBackend;
  var cupsApi;

  beforeEach(module('cups.core'));
  beforeEach(inject(function($injector, _$httpBackend_){
    $httpBackend = _$httpBackend_;
    cupsApi = $injector.get('cupsApi');
  }));

  describe('When the cupsApi was retrieved successfully from the injector', function() {
    it('should exist', function() {
      expect(cupsApi).not.toBe(null);
    });
  });
  
  describe('When requesting a cupper', function() {
    it('should return a cupper instance', function() {

      var id = 1234567;
      var result;

      $httpBackend
        .expect('GET', '/api/cupper/' + id)
        .respond(200, { name: 'Gregor', matriculationNumber: id } );

      cupsApi.getBy(id)
        .then(function(cupper){
          result = cupper;
        });
      $httpBackend.flush();

      expect(result).not.toBe(null);
      expect(result.name).toBe('Gregor');
      expect(result.matriculationNumber).toBe(id);
    });
  });

});
