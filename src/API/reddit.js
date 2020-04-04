import {create} from 'apisauce';
import reactotron from 'reactotron-react-native';

export const Subreddit = 'Coronavirus';

const api = create({
  baseURL: `https://www.reddit.com/r/${Subreddit}`,
  headers: {accept: 'application/json'},
});

const fetchRedditPosts = () => {
  return api.get('/hot/.json?count=20').then((result) => result.data);
};

export default {
  fetchRedditPosts,
};
