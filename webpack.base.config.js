'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './lib/index.js',

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js']
  },

  externals: [
    {
      angular: {
        root: "angular",
        commonjs2: "angular",
        commonjs: "angular",
        amd: "angular"
      }
    }
  ],

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