import SideBar from "../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { getAllTickets } from "../api/ticket";
import TicketStatusDashboard from "../components/TicketStatusDashboard/TicketStatusDashboard";


function Admin(){
    
    const [ticketDetails,setTicketDetails] = useState([]);
    const userType=localStorage.getItem("userType");


    useEffect(()=>{

        getAllTickets()
        .then(res=>{
            setTicketDetails(res.data);
        })
        .catch(err=>{
            console.log(err);
        })

    },[])

        if(userType!=="ADMIN"){
        return <h1> UnAuthorised Access </h1>
    }



    return <div className="row bg-light">

        <div className="col-1">
            <SideBar/>
        </div>

         <div className="col my-4" >
        <TicketStatusDashboard ticketDetails={ticketDetails} />
        </div>


    </div>
}
export default Admin;