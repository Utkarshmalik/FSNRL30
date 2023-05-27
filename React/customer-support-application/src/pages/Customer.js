import SideBar from "../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { getAllTickets } from "../api/ticket";
import TicketStatusDashboard from "../components/TicketStatusDashboard/TicketStatusDashboard";
import TicketsTable from "../components/TicketsTable/TicketsTable";


function Customer(){

    const [ticketDetails,setTicketDetails] = useState([]);

     useEffect(()=>{

        getAllTickets()
        .then(res=>{
            setTicketDetails(res.data);
        })
        .catch(err=>{
            console.log(err);
        })

    },[])



    return <div className="row bg-light">

        <div className="col-1">
            <SideBar/>
        </div>

         <div className="col my-4" >
        <TicketStatusDashboard ticketDetails={ticketDetails} />
           <hr/>
        <div>
        <TicketsTable ticketDetails={ticketDetails} />
        </div>
        </div>


    </div>
}
export default Customer;