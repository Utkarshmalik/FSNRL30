import {Form, Button} from "react-bootstrap";
import {useState} from "react";
import "./userForm.css";
import Spinner from "../Spinner/spinner.js";



const UserForm=()=>{

    const [email,changeEmail]=useState("");
        const [firstName,changeFirstName]=useState("");
    const [lastName,changeLastName]=useState("");
    const [isLoading,setIsLoading]=useState(false);

    const onSubmit=(e)=>{
        e.preventDefault();
        setIsLoading(true);
    //need to know 

    const user={
        email,firstName,lastName
    }


    fetch('https://dummyjson.com/users/add',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        setIsLoading(false);
        window.location.href="/users";
    })
    .catch((err)=>{
        console.log(err)
    })

    console.log(user);
}

    const onFormDataChange=(e)=>{
        
        const fieldName= e.target.name;

        if(fieldName==="email")
        changeEmail(e.target.value)
        if(fieldName==="firstName")
        changeFirstName(e.target.value)
        if(fieldName==="lastName")
        changeLastName(e.target.value)
    }


  return (
    <div className="user-form">
        <h1 style={{textAlign:"center"}} > New User </h1>
     <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={onFormDataChange} name="email" value={email} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>FirstName </Form.Label>
        <Form.Control onChange={onFormDataChange} value={firstName} name="firstName" type="text" placeholder="FirstName" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>LastName </Form.Label>
        <Form.Control onChange={onFormDataChange} value={lastName} name="lastName" type="text" placeholder="LastName" />
      </Form.Group>
    
    {
        isLoading ? <Spinner/> : <Button variant="primary" type="submit">
        Submit
      </Button>
    }
     
    </Form>
    </div>
  );
}

export default UserForm;