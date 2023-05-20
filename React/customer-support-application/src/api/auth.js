import axios from "axios";

const BASE_URL = "http://localhost:8000";


export async function login(data){
    return axios.post(`${BASE_URL}/crm/api/v1/auth/signin`, data);
}