const express = require('express');
const axios = require('axios');
const rules = require('./rules');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/checklist', async (req, res) => {
    try {
        const response = await axios.get('http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639');
        const data = response.data;

        const results = rules.map(rule => {
            const result = typeof rule.expected === 'function' ? rule.expected(data) : data[rule.key] === rule.expected;
            return { name: rule.name, passed: result };
        });

        res.json(results);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

