//Budget API


const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;


app.use(cors());

const fs = require('fs');




const budget = JSON.parse(fs.readFileSync('budget-data.json', 'utf8'));





app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example API listening at http://localhost:${port}`)
});