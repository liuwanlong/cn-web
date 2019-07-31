import axios from 'axios'
import { API_URL } from "./Constants";

axios.defaults.baseURL = `${API_URL}/api`;
axios.defaults.withCredentials = true;

export default axios