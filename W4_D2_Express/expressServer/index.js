const express = require('express')
const app = express()

app.use(express.static("public"));  //static files are stored in public folder

app.get('/', function (req, res) {
  res.send('Hello World');  //first sending a response but we will see better methods to send responses back
})

app.get('/bob', (req, res)=>{
    res.sendFile(__dirname + "/views/bob.html");
})
app.get('/patricio', (req, res)=>{
    res.sendFile(__dirname + "/views/patricio.html");
})
app.get('/cangreburger', (req, res)=>{
    res.sendFile(__dirname + "/views/cangreburger.html");
})


app.get('/about', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
    </head>
    <body>
        <h1>Title from a html fake file</h1>
        <img src="/images/image1.webp" alt="text image" class="image"/>
    </body>
    </html>`);
})

app.post('/', function (req, res) {
    res.send("post response");
})

app.get('*', (req, res)=>{
    res.sendFile(__dirname + "/views/404.html");
});

app.listen(3000, ()=>{
    console.log("listening to port 3000");
})