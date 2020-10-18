const express = require('express');
const formidale = require('formidable');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/addition', function (request, response) {
    const x = Number(request.query.x), y = Number(request.query.y), result = x + y;

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(`{ "result": ${result} }`);

    console.log(`Handled addition request for x=${result} and y=${result}`);
});

app.listen(8080);

console.log(`access http://127.0.0.1:8080/addition?x=2&y=2`)
