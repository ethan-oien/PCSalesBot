require('dotenv').config()
const express = require('express');
const { getAccessToken } = require('./reddit/auth')
const { getSubredditHotPosts } = require('./reddit/api')

const app = express();

const port = 8000;

app.listen(port, async () => {
    console.log(`Server listening on ${port}...`);

    const token = await getAccessToken();

    const data = await getSubredditHotPosts(token, 'buildapcsales');

    data.forEach((c) => {
        console.log(c);
    });
});