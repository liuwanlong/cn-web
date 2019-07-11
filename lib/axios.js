import axios from 'axios'
import { API_URL } from "./Constants";

axios.defaults.baseURL = `${typeof window === "undefined" ? API_URL : ''}/api`;

export default axios