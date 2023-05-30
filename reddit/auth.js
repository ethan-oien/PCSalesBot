const axios = require('axios').default;

async function getAccessToken()
{
    return new Promise((resolve, reject) => { 
        const url = "https://www.reddit.com/api/v1/access_token";

        const data = {
            grant_type: "client_credentials"
        }

        const headers = {
            "Authorization": "Basic " + Buffer.from(`${process.env.REDDIT_CLIENT_ID}:${process.env.REDDIT_SECRET}`).toString('base64'),
            "Content-Type": "application/x-www-form-urlencoded"
        }

        axios.post(url, data, {
            headers: headers
        })
        .then((res) => {
            resolve(res.data.access_token);
        })
        .catch((err) => {
            reject(err);
        });
    });
}

module.exports = {
    getAccessToken
}