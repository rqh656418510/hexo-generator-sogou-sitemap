var merge = require('utils-merge');
var pathFn = require('path');
var log = require('hexo-log')({name: 'hexo-generator-sogou-sitemap', debug: false});

var config = hexo.config;

config.sogousitemap = merge({'path':'sogousitemap.xml'}, config.sogousitemap);

if (!pathFn.extname(config.sogousitemap.path)){
  config.sogousitemap.path += '.xml';
}

hexo.extend.generator.register('sogousitemap', require('./lib/generator'));
