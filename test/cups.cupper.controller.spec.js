'use strict';

describe('Using the cupperController', function() {

  var controller;
  var $httpBackend;
  var scope;
  var cupsApi;

  beforeEach(module('cups.cupper'));
  beforeEach(inject(function($controller, _$httpBackend_, $rootScope, $injector){
    scope = $rootScope.$new();
    cupsApi = $injector.get('cupsApi');

    controller = $controller('cupperController', { $scope: scope, cupsApi: cupsApi });
    spyOn(scope, '$emit');

    $httpBackend = _$httpBackend_;
  }));

  describe('When the controller was created successfully', function() {
    it('should exist', function() {
      expect(controller).not.toBe(null);
    });
  });

  describe('When the cupper was created successfully', function() {
    it('should contain an instance of the created cupper', function() {

      $httpBackend.expect('POST', '/api/cupper/')
                  .respond(201, { name: 'Gregor', matriculationNumber: 1234567 });

      controller.create();
      $httpBackend.flush();

      expect(controller.identity.name).toBe('Gregor');
    });

    it('should raise an event that creation was successful', function() {
      $httpBackend.expect('POST', '/api/cupper/')
                  .respond(201, { name: 'Gregor', matriculationNumber: 1234567 });

      controller.create();
      $httpBackend.flush();

      expect(scope.$emit)
        .toHaveBeenCalled();
    });

  });

});
