import axios from "axios";

const ApiUrl = axios.create({
    baseURL: "https://api-best-browser-games.vercel.app/"
})

export default ApiUrl