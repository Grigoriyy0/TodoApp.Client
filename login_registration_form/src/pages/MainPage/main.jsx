import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import App from '../RegisterPage/Register.jsx'
import Register from "../RegisterPage/Register.jsx";
import Login from "../LoginPage/Login.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    </BrowserRouter>
)
