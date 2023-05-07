import logo from './logo.svg';
import './App.css';
import Login from "../src/components/Login/Login";
import UserList from "./components/UserList/userList";
import { useState } from 'react';

function App() {

  const [isLoggedIn, changeIsLoggedInState] = useState(false);

  return (
    <div>
      <UserList/>
    </div>
  );
}

export default App;
