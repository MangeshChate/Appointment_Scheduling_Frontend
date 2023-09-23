import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainNav from './MainNav'
import  Info from './mainNav/Info'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FAQ from './mainNav/FAQ'
import Feedback from './mainNav/Feedback'
import Policy from './mainNav/Policy'
import Terms from './mainNav/Terms'

export default function Main() {
    return (
      
        <div className="flex-column p-4 w-auto">
            <h2 className="header ">About Us</h2>
            <div className="row m-3 d-flex  align-items-center">


                <img src="https://static.toiimg.com/thumb/msid-51767839,width-400,resizemode-4/51767839.jpg" alt="" className='rounded-circle img-fluid' style={{ width: "8rem", height: "6rem", borderRadius: "6rem" }} />
                <div className="flex-column col-auto">
                <h1 className="col">Dr Chopper</h1>
                <span className='text-muted' style={{fontSize:"1.3rem"}}>Appointments</span>
                </div>
                <div className='col'>
                <FontAwesomeIcon icon="fa-solid fa-badge-check" />
                <a href="#">Verify Company</a>
                </div>
            </div>
            <div className="row p-4">
                <p className='col-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sint nulla nihil!</p>
                <div className="col">
                    <span className="material-symbols-outlined text-danger"> edit </span>
                </div>
            </div>


            <div className="">
                <MainNav/>
                
            </div>
            <div >
                {/* Cards  */}
                <Info/>
                   
               
             
        


            </div>
        </div>
             
    )
}
