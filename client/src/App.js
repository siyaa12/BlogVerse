import React from 'react';
import Home from  './Components/Home'
import Signup from './Components/Signup'
import Navbar from './Components/Navbar'
import Create from './Components/Create'
import Profile from './Components/Profile'
import Login from './Components/Login'
import Update from './Components/Update'
import Single from './Components/Single';
import Comments from './Components/Comments';
import AllPost from './Components/AllPost';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { useContext,useEffect,useState } from "react";
import { Context } from "./context/Context";


function App() {
  const [user,setuser]=useState([]);
  const [logged,setlogged]=useState(false);
  return (
    <>
    <Context.Provider value={{user,setuser,setlogged,logged}}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile/:profileId" element={<Profile/>}/>
      <Route path="/register" element={logged ? <Home /> : <Signup />}/>
        <Route path="/login" element={logged ? <Home /> : <Login />}/>
        <Route path="/write" element={logged ? <Create /> : <Signup />}/>
        <Route path="/settings"element ={logged ? <Update /> : <Signup />}/>
        <Route path="/comments/:commentId" element={<Comments/>}/>
      <Route path="blogs/:blogId" element={<Single/>}/>
    </Routes>
    </BrowserRouter>
    </Context.Provider>
    </>
  );
}

export default App;
