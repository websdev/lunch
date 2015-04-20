require('babel/register');

var express = require('express');
var app = express();

var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');
var invokeArgs = process.argv.slice(2).join(' ');

var listenPort = process.env.PORT ||
  invokeArgs.match(/(?:port=)([0-9]+)\s?/) &&
  invokeArgs.match(/(?:port=)([0-9]+)\s?/)[1] ||
  3000;

var revealOptions = invokeArgs.match(/(?:revealOptions=)({.[^}]+})\s?/) &&
  invokeArgs.match(/(?:revealOptions=)({.[^}]+})\s?/)[1] ||
  '{}';

var presentationFile = invokeArgs.match(/(?:presentationFile=)(.[^\s]+)\s?/) &&
  invokeArgs.match(/(?:presentationFile=)(.[^\s]+)\s?/)[1] ||
  '';

var presentationDir = path.dirname(path.resolve(process.cwd() + '/' + presentationFile));

var theme = invokeArgs.match(/(?:theme=)(.[^\s]+)\s?/) &&
  invokeArgs.match(/(?:theme=)(.[^\s]+)\s?/)[1] ||
  path.relative(process.cwd(), presentationDir + '/style.css');

try {
  fs.openSync(process.cwd() + '/' + theme, 'r');
} catch (error) {
  theme = './node_modules/reveal.js/css/theme/black.css';
}

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.set('views', process.cwd());

app.get('/', function(req, res){
  res.render('presentation.ejs', {
    revealOptions: JSON.stringify(Object.assign({
      center: false,
      dependencies: [
        { src: 'node_modules/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'node_modules/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'node_modules/reveal.js/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'node_modules/reveal.js/plugin/zoom-js/zoom.js', async: true },
        { src: 'node_modules/reveal.js/plugin/notes/notes.js', async: true }
      ]
    }, JSON.parse(revealOptions))),
    presentationFile: presentationFile,
    theme: theme,
    printable: (typeof req.query['print-pdf'] !== "undefined")
  });
});

app.use(express.static(__dirname));

app.listen(listenPort);

exec('open ' + 'http://localhost:'  + listenPort);
