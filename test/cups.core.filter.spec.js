'use strict';

describe('Testing the toCollection', function() {

  var $filter;

  beforeEach(angular.mock.module('cups.core'));
  beforeEach(angular.mock.inject(function(_$filter_) {
    $filter = _$filter_;
  }));


  describe('When passing 10 to the filter', function() {
    it('should create an array of length 10', function() {
      var result = $filter('toCollection')(10);
      expect(result.length).toBe(10);
    });
  });

  describe('When passing 0 to the filter', function() {
    it('should return not an array but the value passed to it', function() {
      var result = $filter('toCollection')(0);
      expect(result).toBe(0);
    });
  });

  describe('When passing characters to the filter', function() {
    it('should return not an array but the value passed to it', function() {
      var result = $filter('toCollection')('aasf');
      expect(result).toBe('aasf');
    });
  });

});
