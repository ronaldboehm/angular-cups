'use strict';

describe('When passing 10 to the filter', function() {

  var $filter;

  beforeEach(angular.mock.module('cups.card'));
  beforeEach(angular.mock.inject(function(_$filter_) {
    $filter = _$filter_;
  }));


  it('should create an array of length 10', function() {

    var result = $filter('toCollection')(10);

    expect(result.length).toBe(10);
  });
});
