import { useState, useEffect } from "react";
import User from "../User/user";
import "./userList.css";
import Spinner from "../Spinner/spinner";
import UserModal from "../UserModal/userModal";
import { Button } from "react-bootstrap";
var users=[];

function UserList(props){

    console.log("Inside function");

  const [isDataAvailable,setIsDataAvailable]=useState(false);
  const [searchValue, setSearchValue]=useState("");
  const [usersList,setUsersList]=useState([]);
  const [isUserModalOpen, setIsUserModalOpen]=useState(false);
  const [selectedUser, setSelectedUser]=useState(null);


  useEffect(function(){
    fetchUsers();
  },[]);
  

  useEffect(function(){
    fetch(`https://dummyjson.com/users/search?q=${searchValue}`)
    .then(res => res.json())
    .then(res=>{
      setUsersList(res.users);
    });
 
  },[searchValue]);

  const fetchUsers=()=>{

   fetch("https://dummyjson.com/users")
    .then(res => res.json())
    .then((data)=>{
      setIsDataAvailable(true);
      console.log("Fetching users");
      setUsersList(data.users);
    })
    .catch((err)=>{
      console.log(err);
    })

  }

  const onDeleteUser=(id)=>{
    fetch(`https://dummyjson.com/users/${id}`, {
      method: 'DELETE',
    }).then(res => res.json())
      .then((res)=>{
        if(res.isDeleted){
          fetchUsers();
        }
      }
      );
  }

  const displayUsers=(users)=>{
    return    users.map((userDetails)=>{
                    return <User onUserClick={onUserDivClick} userInfo={userDetails} onDelete={onDeleteUser} />
                })
}

  const onSearchValueChange=(e)=>{
    const value = e.target.value.toLowerCase();
    setSearchValue(value);
  }

  const onCloseUserModal=()=>{
    setIsUserModalOpen(false);
    setSelectedUser(null);
  }

  const onOpenUserModal=()=>{
    setIsUserModalOpen(true);
  }

  const onUserDivClick=(id)=>{
    onOpenUserModal();
    setSelectedUser(id);
  }

  console.log("rendering the component");
  
    return (

        <div>
         <h1 style={{textAlign:"center"}} > Users List </h1>

         <div style={{display:"flex",justifyContent:"flex-end"}}>
          <Button onClick={()=>{
          window.location.href="/users/new"
        }}> Add new  </Button>
               <Button onClick={()=>{
          window.location.href="/"
        }}  > Logout </Button>
         </div>

         <div className="search-box" >
           <form>
            <input onChange={onSearchValueChange}  value={searchValue} type="text" />
           </form>
         </div>

        <div className="userList" >
            {
               (isDataAvailable) ? displayUsers(usersList) : <div className="spinner">  <Spinner/> </div>
            }


            <UserModal show={isUserModalOpen} onClose={onCloseUserModal} userId={selectedUser} />

        </div>

   
        </div>
    )

}

export default UserList;