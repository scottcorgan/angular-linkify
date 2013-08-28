# angular-linkify

Angular filter and directive to linkify text. As of **v0.2.1**, angular-linkify works for twitter mentions, hashtags, and basic urls. Github support is COMING SOON!

## Install

```
bower install angular-linkify --save
```

## Usage

Inject module into your application

```javascript
angular.module('YourApp', ['linkify']);
```

User as a normal [AngularJS Filter](http://docs.angularjs.org/guide/dev_guide.templates.filters.using_filters) or [AngularJS Directive](http://docs.angularjs.org/guide/directive)

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

## Todo

* add Github support

## Build

```
grunt
```
