const express = require('express');
const axios = require('axios');
var ejs = require('ejs');
var cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static('views'));
const port = process.env.PORT || 9000;
app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://api.covid19api.com/summary');
        let ans = result.data;
        res.send({message: ans});
    } catch (err) {
        console.error(err);
    }
});

app.get('/world', async (req, res) => {
    try {
        const result = await axios.get('https://api.covid19api.com/summary');
        let ans = result.data;
        res.send({message: ans});
    } catch (err) {
        console.error(err);
    }
});

app.get('/states', async (req, res) => {
    try {
        const result = await axios.get('https://api.covid19india.org/data.json');
        let ans = result.data.statewise;
        res.send({message: ans});
    } catch (err) {
        console.error(err);
    }
});

app.get('/district/:_state', async (req, res) => {
    try {
        const result = await axios.get('https://api.covid19india.org/v2/state_district_wise.json');
        let ans = result.data;
        res.send({message: ans, _state: req.params._state});
    } catch (err) {
        console.error(err);
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});