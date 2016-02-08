'use strict'

var webpack = require('webpack');
var baseConfig  = require('./webpack.base.config.js');

var config = baseConfig;

config.plugins = [
  new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin()
];

module.exports = config;