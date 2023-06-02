require('dotenv').config()
const express = require('express');
const { getAccessToken } = require('./reddit/auth');
const { getSubredditHotPosts } = require('./reddit/api');

const app = express();

const port = 8000;

app.listen(port, async () => {
    console.log(`Server listening on ${port}...`);

    const token = await getAccessToken();

    const [data, next] = await getSubredditHotPosts(token, 'buildapcsales');

    data.forEach((c) => {
        console.log(c.data.title);
    });

    console.log('--------------------')

    const [data2, next2] = await next();

    data2.forEach((c) => {
        console.log(c.data.title);
    });
});