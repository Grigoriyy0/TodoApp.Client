import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from "../RegisterPage/Register.jsx";
import Login from "../LoginPage/Login.jsx";
import HomePage from "../HomePage/Home.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
        </Routes>
    </BrowserRouter>
)
