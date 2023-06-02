require('dotenv').config()
const express = require('express');
const RedditService = require('./services/reddit')

const app = express();

const port = 8000;

app.listen(port, async () => {
    try {
        const redditService = new RedditService(process.env.REDDIT_CLIENT_ID, process.env.REDDIT_SECRET);

        const deals = await redditService.getDeals();
    
        deals.forEach((d) => {
            console.log(d.data.title);
        });
    } catch(err) {
        console.error(err);
    }
});