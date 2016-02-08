'use strict';

var angular = require('angular');

angular.module('linkify')
  .filter('linkify', [
    'linkify',
    function (linkify) {
      return function (str, options) {
        if (!str) { return str; }
        return linkify.parse(str, options);
      };
    }
  ]);