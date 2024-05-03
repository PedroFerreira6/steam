const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/getAppList', async (req, res) => {
  try {
    const response = await axios.get('https://api.steampowered.com/ISteamApps/GetAppList/v2/');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from Steam API' });
  }
});
app.get('/jogosemsaldo', async (req, res) => {
  try {
    const response = await axios.get('https://store.steampowered.com/api/featuredcategories/?l=portuguese');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from Steam API' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});