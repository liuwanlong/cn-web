import axios from 'axios'
import { API_URL } from "./Constants";

axios.defaults.baseURL = API_URL;

export default axios