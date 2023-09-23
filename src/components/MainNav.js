import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
export default function MainNav() {
  return (
    <>

      <div className="navbar scroll  mt-5" style={{overflowX:"scroll" ,scrollbarWidth:"none",msOverflowStyle:"none",position:"relative"}} >
      {/* MainNavbar  */}
    

        
            <ul className="row  col-auto " type='none'>
                <a className="col navStyle  text-nowrap navbar-item "><to  href="/" className="nav-link active ">Info </to></a>
                <a className="col navStyle text-nowrap  navbar-item"><to href="/faq" className="nav-link ">FAQ</to></a>
                <a className="col navStyle text-nowrap  navbar-item"><to href="/feedback" className="nav-link ">Complaints and Feedback</to></a>
                <a className="col navStyle text-nowrap  navbar-item"><to href="/policy" className="nav-link ">Privacy policy</to></a>
                <a className="col navStyle  text-nowrap navbar-item"><to href="/terms" className="nav-link ">Terms & Conditions</to></a>

            </ul>
     
    </div>
    <hr style={{marginTop:"-0.5rem"}}/>

  
    </>
  )
}
