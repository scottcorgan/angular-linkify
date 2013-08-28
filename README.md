# angular-linkify

Angular filter, directive, and service to linkify text. As of **v0.3.0**, angular-linkify works for twitter/github mentions, twitter hashtags, and basic urls.

## Install

```
bower install angular-linkify --save
```

## Usage

Inject module into your application

```javascript
angular.module('YourApp', ['linkify']);
```

User as a [AngularJS Filter](http://docs.angularjs.org/guide/dev_guide.templates.filters.using_filters) or [AngularJS Directive](http://docs.angularjs.org/guide/directive)

```html
<!-- As a filter -->
<div ng-controller="SomeCtrl">
  <div ng-bind-html-unsave="someValue | linkify"></div> <!-- linkified!! -->
</div>

<!-- As a filter, with twitter parsing -->
<div ng-controller="SomeCtrl">
  <div ng-bind-html-unsave="someValue | linkify:'twitter'"></div> <!-- linkified!! -->
</div>

<!-- As a directive, no twitter -->
<div ng-bind="someModel" linkify></div>

<!-- As a directive, with twitter parsing -->
<div ng-bind="someModel" linkify="twitter"></div>
```

User as a service

```javascript
// Injected into controller
angular.module('someModule').controller('SomeCtrl', function ($scope.linkify) {
  var text = "@scottcorgan and http://github.com";
  
  // Twitter
  $scope.text = linkify.twitter(text);
  
  // Github
  $scope.text = linkify.github(text);
  
});

```

## Build

```
grunt
```
