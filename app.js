const http = require('http');
const port = 3000;
let lang = 'Python';
const server = http.createServer((request, response) => {
    response.write(lang);
    response.end();
})

server.listen(port, (error) => {
    if (error){
        console.log(error);
    }
    else{
        console.log(`Using port ` + port);
    }
})

/*
npm init -y
node app.js
*/