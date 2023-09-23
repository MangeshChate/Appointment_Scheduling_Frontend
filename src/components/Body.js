import React from 'react'
import Verticlebar from './Verticlebar';
import Main from './Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './DashBoard';
export default function Body() {
  return (
 <Router>
 
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col col-md-2 col-sm-2 bg-white  shadow rounded-3   w-auto vbar m-3 vbar" >
            <Verticlebar />
          </div>
          <div className="col  bg-white shadow rounded-3 m-3 mbar">
          <Routes>
            <Route exact path="/about" element={<Main/>}/>
            <Route exact path="/" element={<DashBoard/>}/>

          </Routes>
            </div>


        </div>
      </div>

 </Router>

    
  )
}
