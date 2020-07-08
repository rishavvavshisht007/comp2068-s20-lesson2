const express = require('express');
const { request, response } = require('express');
const app = express();
const https = require('https');

app.get('/' , (request, response) => {
https.get('https://insult.mattbas.org/api/insult', resp => {
resp.on('data', chunk => {
response.send(`
      <http>
          <head><title>Apple</title></head>

          <body>
            <center><h1>Hola!</h1></center>
            
            <p style="font-size: 24px; color: black;">
                ${chunk.toString()}!
            </p>
          </body>
      </http>
      `);
    });
  });
});

app.listen(3000);