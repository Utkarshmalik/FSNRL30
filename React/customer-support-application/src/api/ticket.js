import axios from "axios";

const BASE_URL = "http://localhost:8000";


export async function getAllTickets(){

    return axios.get(`${BASE_URL}/crm/api/v1/tickets`,{
        headers:{
            'x-access-token':localStorage.getItem("token")
        }
    })
}


export async function updateTicket(ticket){

    return axios.put(`${BASE_URL}/crm/api/v1/tickets/${ticket._id}`,ticket,{
        headers:{
            'x-access-token':localStorage.getItem("token")
        }
    })
}
