const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// Define a route that makes an Axios request
app.get('/fetch-data', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com/search/users?q=hasnanivishal&per_page=10&page=1', {
      proxy: {
          protocol: 'https',
          host: 'node-proxy-server.onrender.com',
          port: 443,
        },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
