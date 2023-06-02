const axios = require('axios').default;

async function getAccessToken(client_id, client_secret)
{
    const url = 'https://www.reddit.com/api/v1/access_token';

    const data = {
        grant_type: 'client_credentials'
    }

    const headers = {
        'Authorization': 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    return axios.post(url, data, {
        headers: headers
    })
    .then((res) => {
        return res.data.access_token;
    })
    .catch((err) => {
        throw err;
    });
}

module.exports = {
    getAccessToken
}