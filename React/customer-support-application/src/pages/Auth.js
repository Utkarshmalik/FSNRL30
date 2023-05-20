import axios from "axios";
import { useEffect, useState } from "react";
import { login } from "../api/auth";

function Auth(){

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage]= useState("");
    const [error,setError]=useState(false);


    useEffect(()=>{

        const userType=localStorage.getItem("userType");
        const token=localStorage.getItem("token");

        if(!token || !userType){
            return;
        }

        if(userType==="CUSTOMER"){
            window.location.href="/customer"
        }
        else if(userType==="ENGINEER"){
            window.location.href="/engineer"
        }
        else if(userType==="ADMIN"){
            window.location.href="/admin"
        }


    },[]);

    function onFormDataChange(e){

        const id=e.target.id;

        if(id==="userId"){
            setUserId(e.target.value);
        }
        else if(id==="password"){
            setPassword(e.target.value);
        }

    }

    function clearState(){
        setMessage("");
    }

    function onSignIn(e){

        clearState();

        e.preventDefault();

        if(userId.length<5){
            setError(true);
            setMessage("User Id passed in less than 5 characters");
            return;
        }


        if(password.length<5){
            setError(true);
            setMessage("Password passed in less than 5 characters");
            return;
        }

        const loginDetails={userId, password};

        login(loginDetails)
        .then(res=>{
            console.log(res.data);
            setError(false);
            setMessage("Login Sucessful");

            localStorage.setItem("name", res.data.name);
            localStorage.setItem("userId", res.data.userId);
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("userStatus", res.data.userStatus);
            localStorage.setItem("token", res.data.accessToken);
            localStorage.setItem("userType", res.data.userType);


            window.location.href="/";

        })
        .catch(err=>{
            setError(true);
            setMessage(err.response.data.message);
        })
    }

    return <div className="bg-info d-flex justify-content-center align-items-center vh-100" >

        <div style={{width:"30rem"}} className="card p-3 rounded-4 shadow-lg text-center">

            <h4 className="text-info " > SignIn </h4>

            <form onSubmit={onSignIn}>

                <div className="input-group" >
                    <input className="form-control m-1" onChange={onFormDataChange} value={userId} type="text" id="userId" placeholder="User Id"/>
                </div>


                <div  className="input-group" >
                    <input className="form-control m-1"  onChange={onFormDataChange} value={password} type="password" id="password" placeholder="Password"/>
                </div>


                <div  className="input-group" >
                    <input  className="btn btn-info text-white form-control m-1" type="submit" value="Sign In" />
                    </div>
            </form>

            <div className={(error)?"text-danger":"text-success"} > {message} </div>

        </div>
       </div>

}
export default Auth;