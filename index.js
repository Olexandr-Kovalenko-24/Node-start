// const sum = require('./utils/math');

// console.log('hy')

const http = require('http');

const requestHandler = (request, response) => {
    response.end('hello from server')
}

const server = http.createServer(requestHandler);

server.listen(3000, ()=>{
    console.log('app is started')
});
