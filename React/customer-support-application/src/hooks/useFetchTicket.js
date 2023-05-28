import { useEffect, useState } from "react";
import { getAllTickets } from "../api/ticket";

export const useFetchTicket=()=>{

        const [ticketDetails,setTicketDetails] = useState([]);

           useEffect(()=>{
       fetchTickets();
           },[])

    const fetchTickets=()=>{
        getAllTickets()
        .then(res=>{
            setTicketDetails(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }


    return {fetchTickets, ticketDetails};
}
