'use strict';

/*
 *
 * Node.js is a runtime
 *
 */
// 1
console.log('I heart JavaScript' - 1); // NaN
console.log(__dirname);
console.log(__filename);

// 2
var infiniteProgram = function() {
	var x = 0;
	setInterval(function() {
		console.log(++x);
	}, 1000);
};

infiniteProgram(); // Counter

// 3
setTimeout(function() {
	throw new Error('Game Over');
}, 4000); // Your server has died


/*
 *
 * Node.js is a handful of libraries
 *
 */
var crypto = require('crypto');

var hash = crypto.createHash('md5');
var url = 'http://www.gravatar.com/avatar/';
hash.update('matthew.c.halbe@gmail.com');
console.log(url + hash.digest('hex'));


/*
 *
 * Node.js is an ecosystem of libraries
 *
 */
var blue = require('chalk').blue.bgWhite;
var log = function(msg) {
	console.log(blue(msg));
};

log('I heart JavaScript' - 1); // NaN
log(__filename);


/*
 *
 * Node.js is good at IO
 *
 */
var http = require('http');

[
	'http://www.google.com',
	'http://www.yahoo.com',
	'http://www.bing.com',
	'http://www.webs.com',
	'http://www.pagemodo.com',
	'http://www.contactme.com'
].forEach(function(url, i) {
	http.get(url, function(res) {
		console.log(i, url, ':', res.statusCode);
	});
});


/*
 *
 * Node.js reduces the concern when creating web servers
 *
 */
var http = require('http');
var x = 0;

http.createServer(function(req, res) {
	++x;
	var message = 'request # ' + x;
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('hello you are ' + message);
	console.log(message);
}).listen(4000);
