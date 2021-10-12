import axios from "axios";

const KEY = "AIzaSyAvBwLcPERx4jMAjSbMEGWSnz4cduEAl54";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
