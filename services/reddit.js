const { getAccessToken } = require('../reddit/auth');
const { getSubredditHotPosts } = require('../reddit/api');

class RedditService
{
    //Access token promise
    access_token;

    constructor(client_id, client_secret)
    {
        this.access_token = getAccessToken(client_id, client_secret);
    }

    async getDeals(amount=0)
    {
        const subreddit = 'buildapcsales';

        const deals = [];
        let getPage = async () => getSubredditHotPosts(await this.access_token, subreddit);

        //Get pages until amount is filled
        //If amount is 0, just get first page
        do
        {
            const [data, next] = await getPage();

            for(let i=0;i<data.length;i++)
            {   
                if(amount > 0 && deals.length >= amount) break;
                deals.push(data[i]);
            }

            getPage = next;
        } while(deals.length < amount);

        return deals;
    }
}


module.exports = RedditService;