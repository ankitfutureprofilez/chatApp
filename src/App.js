import './App.css';
import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import io from 'socket.io-client';
import Singup from './components/Singup';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import ChatLists from './components/ChatLists';
import PrivateRoute from './Api/PrivateRoute';
import UserContextProvider, { UserContext } from "./context/UserContextProvider";
import Msgdata from './message/Msgdata';
import Reciver from './message/Reciver';

function App() {
const socket=io.connect("http://localhost:8080/api")
  return (
    <div>

      <UserContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/chats' element={<PrivateRoute><ChatLists/></PrivateRoute>}></Route>
            <Route path='/reg' element={<Singup />}> </Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path="/Mesg" element={<Msgdata/>}></Route>
            <Route path="/Join" element={<Reciver/>}></Route>
          </Routes>
          <Footer />
        </Router>
      </UserContextProvider>
    </div>

  );
}

export default App;

