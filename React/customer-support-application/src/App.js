import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'react-circular-progressbar/dist/styles.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Customer from './pages/Customer';
import Enginner from './pages/Engineer';
import Admin from './pages/Admin';

function App() {
  return (
    <div>

      <Router>

        <Routes>

          <Route path="/" element={<Auth/>} />
          <Route path='/customer' element={<Customer/>} />
          <Route path="/engineer" element={<Enginner/>} />
          <Route path='/admin' element={<Admin/>} />

        </Routes>

      </Router>
    
    </div>
  );
}

export default App;
