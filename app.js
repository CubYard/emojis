var emojis = require('./emojis.json');
var express = require('express');
var app = express();
var port = process.env['EMOJIS_PORT'] || 8080;

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
	response.render('index', {emojis: emojis});
});

app.use('/bower_components', express.static(`${__dirname}/bower_components`));

app.listen(port);

console.log(`Emojis app listening on port ${port}`);