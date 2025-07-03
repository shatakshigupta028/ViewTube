import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = process.env.REACT_APP_API_KEY;


// ✅ General-purpose fetch function
export const apiFetch = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}&maxResults=50&key=${API_KEY}`);
    return data;
  } catch (err) {
    console.error("YouTube API Error:", err.response?.data || err.message);
    return null;
  }
};
