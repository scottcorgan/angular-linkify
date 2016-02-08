'use strict';

var linkifyHtml = require('linkifyjs/html');
var angular = require('angular');

angular.module('linkify')
  .provider('linkify', function () {
    var defaultOptions = {
      formatHref: function (value, type) {
        if (type === 'hashtag') {
          return 'https://twitter.com/hashtag/' + value.substring(1);
        }
        if (type === 'mention') {
          return 'https://www.github.com/' + value.substring(1);
        }
        return value;
      }
    };

    this.setOptions = function (options) {
      defaultOptions = angular.extend(defaultOptions, options);
    };

    this.$get = [
      function () {
        return {
          parse: function (str, options) {
            if (!str) { return str; }
            if (!options) { return linkifyHtml(str, defaultOptions); }
            return linkifyHtml(str, angular.extend(defaultOptions, options));
          },
          getOptions: function () {
            return defaultOptions;
          }
        };
      }
    ];
  });