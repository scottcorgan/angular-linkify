# angular-linkify

Angular filter to linkify urls, "@" usernames, and hashtags.

## Install

```
bower install angular-linkify --save
```

## Usage

Inject module into your application

```javascript
angular.module('YourApp', ['linkify']);
```

User as a normal [AngularJS filter](http://docs.angularjs.org/guide/dev_guide.templates.filters.using_filters)

```html
<div ng-controller="SomeCtrl">
  <div ng-bind-html-unsave="someValue | linkify"></div> <!-- linkified!! -->
</div>
```

## Todo

* Options to exclude "@"ifies and hastags
* Make as injectable service and/or directive
