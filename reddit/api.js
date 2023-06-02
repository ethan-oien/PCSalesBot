const axios = require('axios').default;

const endpoint = 'https://oauth.reddit.com';

async function get(access_token, uri)
{
    if(uri[0] != '/') uri = '/' + uri;
    const url = `${endpoint}${uri}`;

    return axios.get(url, {
        headers: {
            'Authorization': `Bearer ${access_token}`
        }
    })
    .then((res) => {
        return res;
    })
    .catch((err) => {
        throw err;
    });
}

async function getSubredditHotPosts(access_token, subreddit)
{
    const uri = `/r/${subreddit}/hot`;
    
    const res = await get(access_token, uri);

    return res.data.data.children;
}

module.exports = {
    getSubredditHotPosts
}