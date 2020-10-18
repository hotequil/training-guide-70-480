const http = require('http'); // module to use server
const url = require('url'); // module to use resolutions and parses to url
const calc = require('./calc/bin/main.js'); // my module to calc

const start = (port = 8080) => {
    //turns your computer into an http server
    http.createServer((request, response) => {
        // console.log(url);
        // console.log(http);
        // console.log(request);
        // console.log(response);

        calc.add(1,2)
        calc.subtract(1,2)

        const urlParts = url.parse(request.url, true);

        response.writeHead(200, { 'Content-Type': 'text/plain' }); // add configurations to header response
        response.end(`Hello World ${urlParts.query.name || 'user'} from Node.js!`); // add a text in the document html

        console.log('Handled request');
    }).listen(port, 'localhost'); // open the server in port 8080

    console.log('Server running at http://localhost:8080');
};

exports.start = start;
