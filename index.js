const fs = require('fs/promises')

const http = require('http');

const requestHandler = (request, response) => {
    console.log(request.method)
    if (request.method === 'GET'){
        if (request.url === '/') {
            fs.readFile('./views/index.html', 'utf-8')
            .then(data=>response.end(data))
            .catch(error=>response.end(error))
        } else if (request.url === '/home.html', 'utf-8') {
            fs.readFile('./views/home.html')
            .then(data=>response.end(data))
            .catch(error=>response.end(error))
        } else if (request.url === '/style.css') {
            fs.readFile('./views/style.css', 'utf-8')
            .then(data=>response.end(data))
            .catch(error=>response.end(error))
        } else {
            response.statusCode = 404;
            return response.end('Not found')
        }

    } else if (request.method === 'POST') {
        response.statusCode = 403;
        return response.end('Forbidden')
    } else {        
        response.statusCode = 403;}
}

const server = http.createServer(requestHandler);

server.listen(3000, ()=>{
    console.log('app is started')
});
