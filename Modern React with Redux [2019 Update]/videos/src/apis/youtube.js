import axios from 'axios';

const KEY = 'AIzaSyA5vp9pN0CoUPoNflV4gm3qkuzgtHsJJBg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet', 
        maxResults: 5, 
        key: KEY
    }
});