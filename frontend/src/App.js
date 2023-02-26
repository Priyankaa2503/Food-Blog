import './App.css';
import React from 'react';
import {BrowserRouter as Router , Routes , Route, useParams} from "react-router-dom" ;
import Home from './pages/Home';
import Register from './login-register/Register';
import Login from './login-register/Login';
import Navbar from './pages/Navbar';
import Events from './pages/Events';
import Sweets from './pages/Sweets';
import AroundTheWorld from './pages/AroundTheWorld';
import HealthyFood from './pages/HealthyFood';
import CreateNote from './pages/CreateNote';
import SingleNote from './pages/SingleNote'
function App() {
  let id = useParams();
  return (
    <Router>
     
      <Routes>
            <Route path = "/" element = {<Register/>}></Route>
            <Route path = "/home" element = {<Home/>}></Route>
            <Route path = "/login" element = {<Login/>}></Route>
            <Route path = "/events" element = {<Events/>}></Route>
            <Route path = "/sweets" element = {<Sweets/>}></Route>
            <Route path = "/aroundtheworld" element = {<AroundTheWorld/>}></Route>
            <Route path = "/healthyfood" element = {<HealthyFood/>}></Route>
            <Route path = "/createnote" element = {<CreateNote/>}></Route>
            <Route path = "/note/:id" element = {<SingleNote/>}></Route>
      </Routes>
    </Router>
    

  );
}

export default App;
