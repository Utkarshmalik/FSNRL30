import logo from './logo.svg';
import './App.css';
import Login from "../src/components/Login/Login";
import UserList from "./components/UserList/userList";
import { useState } from 'react';

function App() {

  console.log("App function called");

  const [isLoggedIn, changeIsLoggedInState] = useState(false);

  const test=()=>{
    setTimeout(()=>{
      changeIsLoggedInState(!isLoggedIn);
    },3000);
  }

  test();

  return (
    <div>
      {
        isLoggedIn ? <UserList/> : <Login/>
      }
    </div>
  );
}

export default App;
