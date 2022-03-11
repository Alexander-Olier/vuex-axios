import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "aplication/json",
  },
});
export default {
    getAllStates(){
        return apiClient.get('/posts')
    }
}