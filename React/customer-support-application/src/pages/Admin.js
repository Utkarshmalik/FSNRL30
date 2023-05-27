import SideBar from "../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { getAllTickets, updateTicket } from "../api/ticket";
import TicketStatusDashboard from "../components/TicketStatusDashboard/TicketStatusDashboard";
import TicketsTable from "../components/TicketsTable/TicketsTable";
import TicketUpdateModal from "../components/TicketUpdateModal/TicketUpdateModal";


function Admin(){
    
    const [ticketDetails,setTicketDetails] = useState([]);
    const [ticketUpdateModal, setTicketUpdateModal] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState({});
    const userType=localStorage.getItem("userType");

    const openTicketUpdateModal=()=>{
        setTicketUpdateModal(true);
    }

    const onTicketUpdate=(e)=>{

        const field = e.target.name;
        const value = e.target.value;
        selectedTicket[field]=value;

        setSelectedTicket({...selectedTicket});
    }

    const closeTicketUpdateModal=()=>{
        setTicketUpdateModal(false);
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
        if(userType!=="ADMIN"){
        return <h1> UnAuthorised Access </h1>
    }



    return <div className="row bg-light">

        <div className="col-1">
            <SideBar/>
        </div>

         <div className="col my-4" >
        <TicketStatusDashboard ticketDetails={ticketDetails} />
        <hr/>
        <div>
        <TicketsTable onTicketClick={onTicketClick}  ticketDetails={ticketDetails} />
        <TicketUpdateModal onSaveTicket={onSaveTicket} onTicketUpdate={onTicketUpdate} ticketDetails={selectedTicket} closeTicketUpdateModal={closeTicketUpdateModal} show={ticketUpdateModal} />
        </div>
        </div>


    </div>
}
export default Admin;