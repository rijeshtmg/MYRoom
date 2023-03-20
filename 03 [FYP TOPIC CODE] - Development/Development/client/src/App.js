import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import Main from './components/nav/Main';
// import Cards from './components/Card';
import {Toaster} from 'react-hot-toast';

import './index.css';

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "../src/pages/auth/ForgotPassword.js";
import ActivateAccount from "../src/pages/auth/ActivateAccount.js";
import AccessAccount from "../src/pages/auth/AccessAccount.js";
import Dashboard from "../src/pages/user/Dashboard.js";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Main />
    {/* <Cards /> */}
    <Toaster />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/auth/activate-account/:token" element={<ActivateAccount />} />
            <Route path="/auth/access-account/:token" element={<AccessAccount />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;