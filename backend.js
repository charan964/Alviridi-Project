const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Route to fetch ESG data
app.get('/api/esg-data', async (req, res) => {
    try {
        const response = await axios.get('YOUR_ESG_API_ENDPOINT', {
            headers: {
                'Authorization': `Bearer ${process.env.API_KEY}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching ESG data');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
