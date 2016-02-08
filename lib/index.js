'use strict';

var angular = require('angular');
// add configuration for plugins
var linkifyjs = require('linkifyjs');
require('linkifyjs/plugins/hashtag')(linkifyjs);
require('./plugins/mentions')(linkifyjs);

module.exports = angular.module('linkify', []).name;

require('./filter');
require('./service');
require('./directive');