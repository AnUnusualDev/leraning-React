import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '18a6e79b392e4d44a0b64441acf6b863'
    }
})