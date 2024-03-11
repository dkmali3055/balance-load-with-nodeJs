const fs = require('fs');
const https = require('https');
const express = require('express');

const app = express();

const options = {
  key: fs.readFileSync('./ssl/key.pem'),
  cert: fs.readFileSync('./ssl/cert.pem'),
};


const proxyRouter = require('./routes/proxy');

app.use('/app', proxyRouter);


https.createServer(options, app).listen(10000, () => {
  console.log('Load balancer started on port 10000');
});