const express = require('express');
const app = express();
const helmet = require("helmet");
// your code

module.exports = app;
const api = require('./server.js');

app.use(express.static('public'));

//2. Desabilitar powered by
app.use(helmet.hidePoweredBy());

//3. No permitir iframe
app.use(helmet.frameguard(
	{
		action: "deny"
	}));
//4. Mitigar XSS
app.use(helmet.xssFilter());

//5. Evite inferir el tipo MIME
app.use(helmet.noSniff);


app.disable('strict-transport-security');

app.use('/_api', api);

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

let port = process.env.PORT || 3000;

app.listen(port,  '0.0.0.0', () => {
  console.log(`♟️ Lucia info security app started on port ${port}`);
});
