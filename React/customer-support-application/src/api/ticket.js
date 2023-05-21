import axios from "axios";

const BASE_URL = "http://localhost:8000";


export async function getAllTickets(){

    return axios.get(`${BASE_URL}/crm/api/v1/tickets`,{
        headers:{
            'x-access-token':localStorage.getItem("token")
        }
    })
}
