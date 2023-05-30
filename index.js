require('dotenv').config()
const express = require('express');
const { getAccessToken } = require("./reddit/auth")

const app = express();

const port = 8000;

app.listen(port, async () => {
    console.log(`Server listening on ${port}...`);

    const token = await getAccessToken();

    console.log(token);
});