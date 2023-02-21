import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "./css/style.scss";


import Home from './pages/home';
import Private from './pages/private';
import Player from './pages/player';
import NotFound from './pages/notFound';
import Register from './pages/register';
import Login from './pages/login';
import Cpanel from './pages/cpanel';

import Header from "./components/header";
import Footer from "./components/footer";


export default function App() {
  return (
    <BrowserRouter>
     <Header/>
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
