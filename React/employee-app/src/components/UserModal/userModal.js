import { useState, useEffect } from "react";
import {Modal,Button} from "react-bootstrap";
import SpinnerComponent from "../Spinner/spinner";


var userDetails={};

function UserModal(props){

    const [isLoading,setIsLoading]=useState(true);
    const {show,onClose,userId}=props;

    if(userId){
         fetch(`https://dummyjson.com/users/${userId}`)
        .then(res => res.json())
        .then(res=>{
            userDetails=res;
            setIsLoading(false);
        });
    }


    return  <Modal show={show} onHide={onClose}>
              <Modal.Header closeButton>
                   <Modal.Title> UserId : {userId} </Modal.Title>
            </Modal.Header>
             <Modal.Body>

                {isLoading ? <SpinnerComponent/> : <div>  

                    <p> Name {userDetails.firstName} </p>
                    <p> Email {userDetails.email} </p>
                    <p> Eye Color {userDetails.eyeColor} </p>
                    <p> UserName {userDetails.username} </p>
                    <p> Weight {userDetails.weight} </p>
                    <p> MacAddress {userDetails.macAddress} </p>
                    <p> IP {userDetails.ip} </p>
                    <p> SSN {userDetails.ssn} </p>


                </div> }

             </Modal.Body>
             <Modal.Footer>
              <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
        </Modal.Footer>
      </Modal>
}

export default UserModal;