import './App.css';
import {Routes,Route} from 'react-router-dom';
import Signup from './Components/Signup.js';
import Login from './Components/Login.js';
import Home from './Components/Home.js';
import ForgotPassword from './Components/ForgotPassword.js';
import PasswordReset from './Components/PasswordReset.js';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route
          path="/PasswordReset/:email/:token"
          element={<PasswordReset />}
        />
      </Routes>
    </>
  );
}

export default App;
