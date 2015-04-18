require('babel/register');

var express = require('express');
var app = express();

var exec = require('child_process').exec;
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



app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.set('views', process.cwd());

app.get('/', function(req, res){
  res.render('presentation.ejs', {
    revealOptions: JSON.stringify(Object.assign({
      dependencies: [
        { src: 'node_modules/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'node_modules/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'node_modules/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'node_modules/reveal.js/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'node_modules/reveal.js/plugin/zoom-js/zoom.js', async: true },
        { src: 'node_modules/reveal.js/plugin/notes/notes.js', async: true }
      ]
    }, JSON.parse(revealOptions))),
    presentationFile: presentationFile
  });
});

app.use(express.static(__dirname));

app.listen(listenPort);

exec('open ' + 'http://localhost:'  + listenPort);
