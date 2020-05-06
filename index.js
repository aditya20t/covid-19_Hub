const express = require('express');
const axios = require('axios');
var ejs = require('ejs');

const app = express();

app.use(express.static('views'));
const port = process.env.PORT || 3000;
app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://api.covid19api.com/summary');
        let ans = result.data;
        res.render('\index.ejs', {data: ans});
    } catch (err) {
        console.error(err);
    }
});

app.get('/world', async (req, res) => {
    try {
        const result = await axios.get('https://api.covid19api.com/summary');
        let ans = result.data;
        res.render('data/main.ejs', {data: ans});
    } catch (err) {
        console.error(err);
    }
});

app.get('/states', async (req, res) => {
    try {
        const result = await axios.get('https://api.covid19india.org/data.json');
        let ans = result.data.statewise;
        res.render('data/data.ejs', {data: ans});
    } catch (err) {
        console.error(err);
    }
});

app.get('/district/:_state', async (req, res) => {
    try {
        const result = await axios.get('https://api.covid19india.org/v2/state_district_wise.json');
        let ans = result.data;
        res.render('data/district.ejs', {data: ans, _state: req.params._state});
    } catch (err) {
        console.error(err);
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});