
import {Card, Button} from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { calculateStatusCount } from "../../helper/ticketHelper";


const TicketStatusDashboard=(props)=>{

    const {ticketDetails} =props;

    const userName=localStorage.getItem("name");
    const userType=localStorage.getItem("userType");

    const ticketStatusCount =calculateStatusCount(ticketDetails);


    return ( 
            
            <div className="container">
                <h3 className="text-center"> Welcome, {userName}  </h3>
                <p className="text-center text-muted"> Take a quick look at your {userType} stats </p>

                <div className="row text-center d-flex" >

                                <Card className="m-3" style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <h4>
                                            <i class="bi bi-pencil-fill mx-3"></i>
                                            OPEN 
                                        </h4> 
                                            <hr/>


                                        <div className="row d-flex align-items-center">

                                            <div className="col">
                                                <h1 className="text-dark"> {ticketStatusCount.open} </h1>
                                            </div>
                                            <div className="col">
                                                <div style={{width:80, height:80}}>
                                                 <CircularProgressbar styles={buildStyles({textColor:"blue", pathColor:"darkBlue"})} value={ticketStatusCount.open/ticketDetails.length * 100}   />
                                                </div>
                                            </div>
                                       </div>
                               </Card.Body>
                           </Card>


                                    <Card className="m-3" style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <h4>
                                            <i class="bi bi-lightning-charge-fill mx-3"></i>
                                            PROGRESS 
                                        </h4> 
                                            <hr/>


                                        <div className="row d-flex align-items-center">

                                            <div className="col">
                                                <h1 className="text-dark"> {ticketStatusCount.progress} </h1>
                                            </div>
                                            <div className="col">
                                                <div style={{width:80, height:80}}>
                                                 <CircularProgressbar styles={buildStyles({textColor:"blue", pathColor:"darkBlue"})} value={ticketStatusCount.progress/ticketDetails.length * 100}   />
                                                </div>
                                            </div>
                                       </div>
                               </Card.Body>
                           </Card>

                                    <Card className="m-3" style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <h4>
                        <i class="bi bi-check-circle-fill mx-3"></i>
                                            CLOSED 
                                        </h4> 
                                            <hr/>


                                        <div className="row d-flex align-items-center">

                                            <div className="col">
                                                <h1 className="text-dark"> {ticketStatusCount.closed} </h1>
                                            </div>
                                            <div className="col">
                                                <div style={{width:80, height:80}}>
                                                 <CircularProgressbar styles={buildStyles({textColor:"blue", pathColor:"darkBlue"})} value={ticketStatusCount.closed/ticketDetails.length * 100}    />
                                                </div>
                                            </div>
                                       </div>
                               </Card.Body>
                           </Card>


                                <Card  className="m-3" style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <h4>
                                    <i class="bi bi-slash-circle mx-3"></i>
                                            BLOCKED 
                                        </h4> 
                                            <hr/>


                                        <div className="row d-flex align-items-center">

                                            <div className="col">
                                                <h1 className="text-dark"> {ticketStatusCount.blocked} </h1>
                                            </div>
                                            <div className="col">
                                                <div style={{width:80, height:80}}>
                                                 <CircularProgressbar styles={buildStyles({textColor:"blue", pathColor:"darkBlue"})} value={ticketStatusCount.blocked/ticketDetails.length * 100}   />
                                                </div>
                                            </div>
                                       </div>
                               </Card.Body>
                           </Card>

                </div>

            </div>

        )


}

export default TicketStatusDashboard;