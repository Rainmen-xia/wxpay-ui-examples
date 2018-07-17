const fs = require('fs')
const path = require('path')
const hash = require('hash-sum')
const LRU = require('lru-cache')
const hljs = require('highlight.js')
var cheerio = require('cheerio');
var loaderUtils = require('loader-utils');

// markdown-it 插件
const emoji = require('markdown-it-emoji')
const anchor = require('markdown-it-anchor')
const toc = require('markdown-it-table-of-contents')
var Token = require('markdown-it/lib/token');
// 自定义块
const containers = require('./container')


/**
 * html => vue file template
 * @param  {[type]} html [description]
 * @return {[type]}      [description]
 */
var renderVueTemplate = function(html, wrapper) {
  var $ = cheerio.load(html, {
    decodeEntities: false,
    lowerCaseAttributeNames: false,
    lowerCaseTags: false
  });

  var output = {
    style: $.html('style'),
    // get only the first script child. Causes issues if multiple script files in page.
    script: $.html($('script').first())
  };
  var result;

  $('style').remove();
  $('script').remove();

  result =
    `<template><${wrapper}>` +
    $.html() +
    `</${wrapper}></template>\n` +
    output.style +
    '\n' +
    output.script;

  return result;
};



/**
 * `<pre></pre>` => `<pre v-pre></pre>`
 * `<code></code>` => `<code v-pre></code>`
 * @param  {string} str
 * @return {string}
 */
var addVuePreviewAttr = function(str) {
  return str.replace(/(<pre|<code)/g, '$1 v-pre');
};

  const cache = LRU({ max: 1000 })

module.exports = function (src) {
  const isProd = process.env.NODE_ENV === 'production'
  var opts = loaderUtils.getOptions(this) || {};
  debugger
  const file = this.resourcePath
  const key = hash(file + src)
  const cached = cache.get(key)


  const parser = require('markdown-it')({
    html: true,
    // 代码高亮
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' +
            hljs.highlight(lang, str, true).value +
            '</code></pre>'
        } catch (__) {}
      }
  
      return '<pre v-pre class="hljs"><code>' + parser.utils.escapeHtml(str) + '</code></pre>'
    }
  })
    // 使用 emoji 插件渲染 emoji
    .use(emoji)
    // 使用 anchor 插件为标题元素添加锚点
    .use(anchor, {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '#'
    })
    // 使用 table-of-contents 插件实现自动生成目录
    .use(toc, {
      includeLevel: [2, 3]
    })
    // 定义自定义的块容器
    .use(containers)

    parser.core.ruler.push('extract_script_or_style', function replace(state) {

          let tag_reg = new RegExp('<(script|style)(?:[^<]|<)+</\\1>', 'g');
          let newTokens = [];
          state.tokens
            .filter(token => token.type == 'fence' && token.info == 'html')
            .forEach(token => {
              let tokens = (token.content.match(tag_reg) || []).map(content => {
                let t = new Token('html_block', '', 0);
                t.content = content;
                return t;
              });
              if (tokens.length > 0) {
                newTokens.push.apply(newTokens, tokens);
              }
            });
          state.tokens.push.apply(state.tokens, newTokens);
        });
      /**
   * override default parser rules by adding v-pre attribute on 'code' and 'pre' tags
   * @param {Array<string>} rules rules to override
   */
  function overrideParserRules(rules) {
    if (parser && parser.renderer && parser.renderer.rules) {
      var parserRules = parser.renderer.rules;
      rules.forEach(function(rule) {
        if (parserRules && parserRules[rule]) {
          var defaultRule = parserRules[rule];
          parserRules[rule] = function() {
            return addVuePreviewAttr(defaultRule.apply(this, arguments));
          };
        }
      });
    }
  }

  overrideParserRules(['code_inline', 'code_block', 'fence']);

  
  // if (preprocess) {
  //   source = preprocess.call(this, parser, source);
  // }

  // 重新模式下构建时使用缓存以提高性能
  
  if (cached && (isProd || /\?vue/.test(this.resourceQuery))) {
    return cached
  }

  const html = parser.render(src)
  
  var result = renderVueTemplate(html,'div');

  cache.set(key, result)
  return result
}