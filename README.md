# Sogou sitemap generator

## Install

Suitable for hexo version 3.x.x, you can install as follow:

``` bash
$ npm install hexo-generator-sogou-sitemap --save
```

## Update

``` bash
$ npm remove hexo-generator-sogou-sitemap

$ npm install hexo-generator-sogou-sitemap --save
```

## Options

``` yaml
sogousitemap:
  path: sogousitemap.xml
```

- **url** - Website url. (Optional)
- **path** - Sitemap path. (Default: sogousitemap.xml)

## Errors

Maybe response is "hexo is not definded", then you should:

``` bash
$ cd node_modules/hexo-generator-sogou-sitemap/

$ npm install
```

## Thanks

- [hexo-generator-baidu-sitemap](https://github.com/coneycode/hexo-generator-baidu-sitemap)
