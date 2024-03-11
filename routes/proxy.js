const express = require('express'); 
const proxy = require('http-proxy-middleware');
const axios = require('axios');
const router = express.Router();

const servers = [
  {
    id: "server_one",
    host: 'localhost',
    port: 8000,
    weight: 3,
  },
  {
    id: "server_second",
    host: 'localhost',
    port: 8081,
    weight: 1,
  },
  // Add more servers here
];

// Proxy middleware configuration
const proxyOptions = {
  target: '',
  changeOrigin: true,
  onProxyReq: (proxyReq, req) => {
    // Add custom header to request
    proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
  },
  logLevel: 'debug' 
};
// Total weights
let totals = [];

// Generate list of cumulative weights 
function initWeights() {

  totals = [];
  let runningTotal = 0;

  for (let i = 0; i < servers.length; i++) {
    runningTotal += servers[i].weight;
    totals.push(runningTotal); 
  }

}

function getServer() {
    initWeights()
  const random = Math.floor(Math.random() * totals[totals.length - 1]) + 1;

  // Find server at index for this weight
  for (let i = 0; i < totals.length; i++) {
    if (random <= totals[i]) {
      return servers[i];
    }
  }

}
// Next server index
let currIndex = 0;

// Get next server
function getServer() {

  // Round robin
  currIndex = (currIndex + 1) % servers.length;

  return servers[currIndex];
}



// // Proxy requests
// router.all('*', (req, res) => {
  
//   // Get next target server
//   const target = getServer();
//   proxyOptions.target = `http://${target.host}:${target.port}`;
  
//   // Forward request
//   proxy.createProxyMiddleware(proxyOptions)(req, res); 
// });

let healthyServers = [];

router.all('*', (req, res) => {

  if (healthyServers.length === 0) {
    return res.status(500).send('No healthy servers!');
  }  
  const target = getServer();
  proxyOptions.target = `http://${target.host}:${target.port}`;
  
  // Forward request
  proxy.createProxyMiddleware(proxyOptions)(req, res); 
  // Load balance across only healthy servers
  // ...

});

// Update list of healthy servers
async function updateHealthyServers() {

    // Loop through servers and health check each 
    for (let i = 0; i < servers.length; i++) {
      const server = servers[i];
  
      try {
        const response = await axios.get(`http://${server.host}:${server.port}/app`);
        // Check status
        if (response.status === 200) {
            healthyServers.push({
            id: server.id,
            status: 'passing'
          });  
        }
        
      } catch (error) {
        console.log(error.message);
        console.log("unhealthy server id : ", server.id)
      }
    }
}

// Call initially 
updateHealthyServers();

// Update health periodically
setInterval(updateHealthyServers, 10000);


module.exports = router;