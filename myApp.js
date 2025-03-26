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

//5. helmetNoSniff
app.use(helmet.noSniff());

//6. Evite que Internet Explorer abra HTML no confiable
app.use(helmet.ieNoOpen());

app.disable('strict-transport-security');

app.use('/_api', api);

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

let port = process.env.PORT || 10000;

app.listen(port, () => {
  console.log(`♟️ Lucia info security app started on port ${port}`);
});
