var merge = require('utils-merge');
var pathFn = require('path');
var log = require('hexo-log')({name: 'hexo-generator-sogou-sitemap', debug: false});

var config = hexo.config;

// 处理文件扩展名
if (!pathFn.extname(config.sogousitemap.path)){
  config.sogousitemap.path += '.xml';
}

hexo.extend.generator.register('sogousitemap', require('./lib/generator'));
