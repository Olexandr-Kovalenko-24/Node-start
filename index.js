const fs = require('fs').promises;

const promise = fs.readFile('./text.txt', 'utf-8')
.then(promiseValue=>{
    console.log(promiseValue);
})
