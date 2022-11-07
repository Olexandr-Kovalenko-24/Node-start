const fs = require('fs').promises;

const promise = fs.readFile('./userData.json', 'utf-8')
.then(promiseValue=>{
    const obj = JSON.parse(promiseValue);
    fs.writeFile('./text.txt', `Hello ${obj.firstName} ${obj.lastName}`);
})
