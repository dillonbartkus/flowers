const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = process.env.HTTP_PORT || 3000;

app.get('/posts', (req, res) => {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then( data => data.json() )
    .then( json => res.send(json) )
});

app.listen(port, () => {  
  console.log(`Listening on ${port}`)
});