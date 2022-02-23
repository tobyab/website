var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
var result = md.render('#hello world!');