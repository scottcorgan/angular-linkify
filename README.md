# angular-linkify

Angular filter, directive, and service to linkify text. As of **v0.3.0**, angular-linkify works for twitter/github mentions, twitter hashtags, and basic urls.

## Install

Install via either [bower](http://bower.io/), [npm](https://www.npmjs.com/), CDN (jsDelivr) or downloaded files:

* `bower install angular-linkify --save`
* `npm install angular-linkify --save`
* use [CDN file](https://www.jsdelivr.com/projects/angular.linkify)
* download [angular-linkify.zip](https://github.com/scottcorgan/angular-linkify/zipball/master)



Include `angular-linkify.min.js` in your angular application

```html
<!-- when using bower -->
<script src="bower_components/angular-linkify/angular-linkify.min.js"></script>

<!-- when using npm -->
<script src="node_modules/angular-linkify/angular-linkify.min.js"></script>

<!-- when using cdn file -->
<script src="//cdn.jsdelivr.net/angular.linkify/1.2.0/angular-linkify.min.js"></script>

<!-- when using downloaded files -->
<script src="angular-linkify.min.js"></script>
```


## Usage

Inject module into your application

```javascript
angular.module('YourApp', ['linkify']);
```

Use as a [AngularJS Directive](http://docs.angularjs.org/guide/directive)

```html
<!-- As a directive, no twitter -->
<div ng-bind="someModel" linkify></div>

<!-- As a directive, with twitter parsing -->
<div ng-bind="someModel" linkify="twitter"></div>
```

Inject as a [AngularJS Service](http://docs.angularjs.org/guide/dev_guide.services)

```javascript
// Injected into controller
angular.module('someModule').controller('SomeCtrl', function ($scope, linkify, $sce) {
  var text = "@scottcorgan and http://github.com";
  
  // Twitter
  // Must use $sce.trustAsHtml() as of Angular 1.2.x
  $scope.text = $sce.trustAsHtml(linkify.twitter(text));
  // outputs: <a href="https://twitter.com/scottcorgan" target="_blank">scottcorgan</a> and <a href="http://github.com" target="_blank">http://github.com</a>
  
  // Github
  // Must use $sce.trustAsHtml() as of Angular 1.2.x
  $scope.text = $sce.trustAsHtml(linkify.github(text));
  // outputs: <a href="https://github.com/scottcorgan" target="_blank">scottcorgan</a> and <a href="http://github.com" target="_blank">http://github.com</a>
  
});

```

## Build

```
grunt
```
