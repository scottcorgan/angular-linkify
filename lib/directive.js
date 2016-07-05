var angular = require('angular');
var linkifyElement = require('linkifyjs/element');

angular.module('linkify').directive('linkify',[
  'linkify',
  function (linkify) {
    var defaultOptions = linkify.getOptions() || {};

    var link = function (scope, element) {
      var options = angular.extend(defaultOptions, scope.options);

      scope.$evalAsync(function () {
        try {
          linkifyElement(element[0], options);
        } catch (e) {}
      });
    };

    return {
      link: link,
      scope: {
        options: '=?linkify'
      }
    }
  }
])