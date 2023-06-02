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
    const doWork = async (uri, queryString='') => {
        const res = await get(access_token, uri + queryString);

        const fullname = res.data.data.after;
        const next = async () => doWork(uri, `?after=${fullname}`);
    
        return [ res.data.data.children, next ];
    }

    const uri = `/r/${subreddit}/hot`;
    return doWork(uri);
}

module.exports = {
    getSubredditHotPosts
}