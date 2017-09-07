angular.module('linkify', []);

angular.module('linkify')
  .filter('linkify', function () {
      'use strict';

      function linkify (_str, type) {
        if (!_str) {
          return;
        }

        function addProtocol (url) {
	        if(/(([\w]+:)?\/\/)/ig.test(url) === false) {
	            url = 'http://' + url;
	        }
	        return url;
	      }

        var regex = /(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?/ig;

        var _text = _str.replace( regex, function(url) {
              var wrap = document.createElement('div');
              var anch = document.createElement('a');
              anch.href = addProtocol(url);
              anch.target = '_blank';
              anch.innerHTML = url;
              wrap.appendChild(anch);
              return wrap.innerHTML;
          });

        // bugfix
        if (!_text) {
          return '';
        }

        // Twitter
        if (type === 'twitter') {
          _text = _text.replace(/(|\s)*@([\u00C0-\u1FFF\w]+)/g, '$1<a href="https://twitter.com/$2" target="_blank">@$2</a>');
          _text = _text.replace(/(^|\s)*#([\u00C0-\u1FFF\w]+)/g, '$1<a href="https://twitter.com/search?q=%23$2" target="_blank">#$2</a>');
        }


        // Github
        if (type === 'github') {
          _text = _text.replace(/(|\s)*@(\w+)/g, '$1<a href="https://github.com/$2" target="_blank">@$2</a>');
        }

        return _text;
      }

      //
      return function (text, type) {
        return linkify(text, type);
      };
  })
  .factory('linkify', ['$filter', function ($filter) {
    'use strict';

    function _linkifyAsType (type) {
      return function (str) {(type, str);
        return $filter('linkify')(str, type);
      };
    }

    return {
      twitter: _linkifyAsType('twitter'),
      github: _linkifyAsType('github'),
      normal: _linkifyAsType()
    };
  }])
  .directive('linkify', ['$filter', '$timeout', 'linkify', function ($filter, $timeout, linkify) {
    'use strict';

    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var type = attrs.linkify || 'normal';
        $timeout(function () { element.html(linkify[type](element.html())); });
      }
    };
  }]);

