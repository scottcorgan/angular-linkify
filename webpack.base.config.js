'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './lib/index.js',

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js']
  },

  output: {
    library: 'AngularLinkify',
    libraryTarget: 'umd',
    path: './dist',
    filename: 'angular-linkify.js'
  },

  module: {
    loaders: []
  }
};