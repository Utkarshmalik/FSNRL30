import { Modal, Button } from "react-bootstrap";

function TicketUpdateModal(props){


    const {closeTicketUpdateModal, ticketDetails, onTicketUpdate, show, onSaveTicket} = props;

    console.log(ticketDetails);
    console.log(show);

    return  <Modal show={show} onHide={closeTicketUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title> TicketId : {ticketDetails._id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <form>

                <div className="input-group m-3">
                    <span className="input-group-text" > Title </span>
                    <input type="text" name="title" value={ticketDetails.title} onChange={onTicketUpdate} />
                </div>

                <div className="input-group m-3">
                    <span className="input-group-text" > Assignee </span>
                    <input type="text" name="assignee" value={ticketDetails.assignee} onChange={onTicketUpdate} />
                </div>

                <div className="input-group m-3">
                    <span className="input-group-text" > Status </span>
                    <input type="text" name="status" value={ticketDetails.status} onChange={onTicketUpdate}  />
                </div>

                <div className="input-group m-3">
                    <span className="input-group-text" > Description </span>
                    <textarea type="text" name="description" rows="5" value={ticketDetails.description} onChange={onTicketUpdate} />
                </div>
                

                      <div className="input-group m-3">
                    <span className="input-group-text" > Priority </span>
                    <input type="text" name="ticketPriority" value={ticketDetails.ticketPriority}  onChange={onTicketUpdate}/>
                </div>

            </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeTicketUpdateModal}>
            Close
          </Button>
          <Button variant="primary" onClick={onSaveTicket}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

}


export default TicketUpdateModal;