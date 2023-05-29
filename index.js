require('dotenv').config()
require('./discord.js')
const express = require('express');

const app = express();

const port = 8000;

app.listen(port, () => {
    console.log(`Server listening on ${port}...`);
});