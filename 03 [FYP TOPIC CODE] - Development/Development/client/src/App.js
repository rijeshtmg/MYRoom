import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import Main from './components/nav/Main';
import {Toaster} from 'react-hot-toast';

import './index.css';

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
    <Main />
    <Toaster />
      <AuthProvider>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;