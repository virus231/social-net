import {BASE_URL} from "./config";
import axios from "axios";
import BaseAxios from 'axios';


axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_KEY;
// const axiosAuth = BaseAxios.create({baseURL: BASE_URL});

export const registerUser = async (body: any) => await axios.post('/api/1.0/auth/login', body);
