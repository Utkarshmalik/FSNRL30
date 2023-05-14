import logo from './logo.svg';
import './App.css';
import Login from "./components/Login/Login";
import UserList from "./components/UserList/userList";
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {



  return (
    <div>

      <Router>

        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/users" element={<UserList />} />

        </Routes>


      </Router>
    </div>
  );
}

export default App;
