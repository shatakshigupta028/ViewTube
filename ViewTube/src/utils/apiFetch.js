// const axios = require('axios');

// const BASE_URL= 'https://youtube-v31.p.rapidapi.com';

// const options = {
//   url: BASE_URL,
//   params: {
//     maxResults: '50',
//     part: 'snippet',         // ✅ Required by YouTube API
//     q: 'reactjs' 
//   },
//   headers: {
//     'X-RapidAPI-Key': '80c762441emshc0bf78768c8f42cp1922d3jsnbc031636d8b1',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };


// export const apiFetch = async(url) => {
//   //  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//   //  return data;
//   try {
//     const { data } = await axios.get(`${BASE_URL}/search`, options);  // ✅ Note: `/search` endpoint
//    console.log('✔️ API response:', data); // helpful debug
//     return data;
//   } catch (err) {
//     console.error('❌ API Error:', err.response?.data || err.message);
//     return null;
//   }
// }
//allows us to call the api and pass some dynamic url then call it from any component in our app




import axios from "axios";
const API_KEY = 'AIzaSyAaPcJX697lWQfEglHTKXrse3PM1tKPkF4'; // 🔑 Paste your key here
const BASE_URL = "https://www.googleapis.com/youtube/v3";


// ✅ General-purpose fetch function
export const apiFetch = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}&maxResults=80&key=${API_KEY}`);
    return data;
  } catch (err) {
    console.error("YouTube API Error:", err.response?.data || err.message);
    return null;
  }
};
