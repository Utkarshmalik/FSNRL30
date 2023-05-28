import { useState } from "react";
import { updateTicket } from "../api/ticket";


export const useTicketUpdate=(fetchTickets)=>{
  const [ticketUpdateModal, setTicketUpdateModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState({});

   const openTicketUpdateModal=()=>{
        setTicketUpdateModal(true);
    }

        const closeTicketUpdateModal=()=>{
        setTicketUpdateModal(false);
    }


     const onTicketUpdate=(e)=>{

        const field = e.target.name;
        const value = e.target.value;
        selectedTicket[field]=value;

        setSelectedTicket({...selectedTicket});
    }


     const onTicketClick=(event,rowData)=>{
        setSelectedTicket(rowData);
        openTicketUpdateModal();
    }


    const onSaveTicket=(e)=>{
        e.preventDefault();

        updateTicket(selectedTicket)
        .then((res)=>{
            fetchTickets();
            closeTicketUpdateModal();
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return {onTicketClick, onSaveTicket, onTicketUpdate, selectedTicket, closeTicketUpdateModal, ticketUpdateModal};
}