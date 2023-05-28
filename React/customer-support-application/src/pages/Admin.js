import SideBar from "../components/Sidebar/Sidebar";
import TicketStatusDashboard from "../components/TicketStatusDashboard/TicketStatusDashboard";
import TicketsTable from "../components/TicketsTable/TicketsTable";
import TicketUpdateModal from "../components/TicketUpdateModal/TicketUpdateModal";
import { useFetchTicket } from "../hooks/useFetchTicket";
import { useTicketUpdate } from "../hooks/useTicketUpdate";


function Admin(){

    const {ticketDetails, fetchTickets}  = useFetchTicket();
    const {onTicketClick, onSaveTicket, onTicketUpdate, selectedTicket, closeTicketUpdateModal, ticketUpdateModal} = useTicketUpdate(fetchTickets);

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