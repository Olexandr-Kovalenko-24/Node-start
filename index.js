// const sum = require('./utils/math');

// console.log('hy')

const http = require('http');

const requestHandler = (request, response) => {
    if (request.method === 'GET'){
        response.end('you send GET method')
    } else if (request.method === 'POST') {
        response.end('you send POST method')
    }
}

const server = http.createServer(requestHandler);

server.listen(3000, ()=>{
    console.log('app is started')
});
