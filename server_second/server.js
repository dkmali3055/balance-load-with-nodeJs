const express = require('express');

const app = express();

app.get('/app', (req, res) => {
  res.send(`Hello from server! Host: server second ${process.env.HOSTNAME}`);
});

app.listen(8081, () => {
  console.log('Backend server running on port 8081');
});