import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "./css/style.scss";
import "./firebase.js";
import { useState, useEffect } from 'react';


import Home from './pages/home';
import Private from './pages/private';
import Player from './pages/player';
import NotFound from './pages/notFound';
import Register from './pages/register';
import Login from './pages/login';
import Cpanel from './pages/cpanel';

import Header from "./components/header";
import Footer from "./components/footer";

const auth = getAuth();





export default function App() {

  var [userData, setUserData] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserData(user);
      console.log(userData.displayName);
    } else {
      setUserData(null);
    }
  });

  return (
    <BrowserRouter>
     <Header userData={userData}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="c-panel" element={<Cpanel/>}/>
        <Route path="players" element={<Private/>}/>
        <Route path="players/:id" element={<Player/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
