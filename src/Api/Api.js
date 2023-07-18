import axios from 'axios';
import io from 'socket.io-client';
const tokens = localStorage.getItem("token");

let Api = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${tokens}`
    }
});
export default Api;