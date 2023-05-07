import { useState, useEffect } from "react";
import User from "../User/user";
import "./userList.css";
import Spinner from "../Spinner/spinner";

var users=[];

function UserList(){

    console.log("Inside function");

  const [isDataAvailable,setIsDataAvailable]=useState(false);
  const [searchValue, setSearchValue]=useState("");
  const [usersList,setUsersList]=useState([]);

  //by default 
  //1. Runs after component is rendered for first time (componentDidMount)
  //2. Runs after each of the dependent state is changed (which are passed in the dependeny array)

  useEffect(function(){
    fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then((data)=>{
      setIsDataAvailable(true);
      users=data.users;
      setUsersList(data.users);
    })
    .catch((err)=>{
      console.log(err);
    })

  },[]);

  const onDeleteUser=(id)=>{

    const updatedUsers=usersList.filter((user)=>{
      return user.id!=id;
    });

    setUsersList(updatedUsers);
  }

  const displayUsers=(users)=>{
    return    users.map((userDetails)=>{
                    return <User userInfo={userDetails} onDelete={onDeleteUser} />
                })
}

  const onSearchValueChange=(e)=>{

    const value = e.target.value.toLowerCase();

    setSearchValue(value);

    const updatedUsers= users.filter((user)=>{

      const name= user.firstName.toLowerCase();

      return name.startsWith(value);

    })

    setUsersList(updatedUsers);

  }


  console.log("rendering the component");
    return (

        <div>
         <h1 style={{textAlign:"center"}} > Users List </h1>

         <div className="search-box" >
           <form>
            <input onChange={onSearchValueChange}  value={searchValue} type="text" />
           </form>
         </div>

        <div className="userList" >
            {
               (isDataAvailable) ? displayUsers(usersList) : <div className="spinner">  <Spinner/> </div>
            }

        </div>
        </div>
    )

}

export default UserList;