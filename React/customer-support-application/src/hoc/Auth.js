import { useLocation, useNavigate } from "react-router-dom";


function Auth(props){

    const location = useLocation();

    const pageType= location.pathname.slice(1);


     //autentication

    const userType=localStorage.getItem("userType");

    if(!userType){
        return <h1> You need to logged in to access this page </h1>
    }

    //authorization here 

    if(userType.toLocaleLowerCase()!==pageType.toLocaleLowerCase()){
        return <h1> You dont have sufficient permissions to access this page </h1>
    }


    return(
        <div>
            {props.children}
        </div>
    )


}

export default Auth;