

import './App.css';
import Home from  './Screen/Home.jsx'
import Login from  './Screen/Login.jsx'
import SignUp from  './Screen/SignUp.jsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Carousel from './components/Carousel';
import Header from './components/Header';
import Footer from './components/Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { useState } from 'react';

function App() {
const [local,setLocal]=useState(true)
  function detect(){
      setLocal(false);
  }
  return (
    <>

<Router>
    <Header detect={detect}></Header>
    <Carousel></Carousel>
  <Routes>
    <Route path='/' element={<Home ></Home>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/signup' element={<SignUp></SignUp>}></Route>
  </Routes>
  <Footer></Footer>

</Router>
    </>
  );
}

export default App;
