import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'react-circular-progressbar/dist/styles.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Auth';
import Customer from './pages/Customer';
import Enginner from './pages/Engineer';
import Admin from './pages/Admin';
import { ThemeProvider, createTheme } from '@mui/material';
import Auth from './hoc/Auth';

function App() {

      const defaultMaterialTheme = createTheme();

  return (
    <div>

      <ThemeProvider theme={defaultMaterialTheme}>
     

      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path='/customer' element={ <Auth> <Customer/> </Auth>} />
          <Route path="/engineer" element={ <Auth><Enginner/>  </Auth> } />
          <Route path='/admin' element={<Auth><Admin/></Auth>} />
        </Routes>
      </Router>
    </ThemeProvider>

    </div>
  );
}

export default App;
