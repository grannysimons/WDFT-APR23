/*
var colors = require('colors');
 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass

*/

const http = require('http');
const server = http.createServer((request, response) => {
    console.log(`Someone has requested ${request.url}`);
   
    if (request.url === '/') {
      response.write('Hello, world!');
      response.end();
    } else {
      response.statusCode = 404;
      response.write('404 Page');
      response.end();
    }
  });
server.listen(3000);
