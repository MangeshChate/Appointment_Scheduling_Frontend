import React from 'react'
import Help from './Help'
import './style.css'
export default function Verticlebar() {

    document.addEventListener("DOMContentLoaded", function() {
        var sidebarBtn = document.getElementById("sidebar-btn");
        var sidebar = document.getElementById("sidebar");
      
        sidebarBtn.addEventListener("click", function() {
          sidebar.classList.toggle("visible");
        });
      });



  return (
    <div className=" navbar flex-column  p-1 bg-white " id="sidebar">
  
    <div className="navbar-brand ">
        <span className='row align-items-center mt-4'>
            <img src="https://static.toiimg.com/thumb/msid-51767839,width-400,resizemode-4/51767839.jpg" alt="" className='col rounded-circle img-fluid' style={{ width: "5rem", height: "3rem", borderRadius: "6rem" }}/>
            <h5 className='col  navShrink' >Dr Chopper</h5>
        </span>
    </div>
    <div className="navbar-nav p-4 " >
        <div className="nav-item d-flex align-items-center justify-content-start mt-4 ">
        <span class="material-symbols-outlined me-3  ">dashboard</span>
        <a href="" className="nav-link navShrink">Dashboard</a>
        </div>

        <div className="nav-item d-flex align-items-center justify-content-start mt-4">

        <span class="material-symbols-outlined me-3 ">grading</span>
        <a href="" className="nav-link navShrink">TimeTable</a>
        </div>

    

        <div className="nav-item d-flex align-items-center justify-content-start mt-4">
        <span className="material-symbols-outlined me-3 ">group</span>
        <a href="" className="nav-link navShrink">Team Members</a>
        </div>
        <div className="nav-item d-flex align-items-center justify-content-start mt-4">
        <span className="material-symbols-outlined me-3 ">handshake</span>
        <a href="" className="nav-link navShrink">Partners</a>
        </div>
        <div className="nav-item d-flex align-items-center justify-content-start mt-4">
        <span className="material-symbols-outlined me-3 ">inventory_2</span>
        <a href="" className="nav-link navShrink">Appointments Listings</a>
        </div>
        <div className="nav-item d-flex align-items-center justify-content-start mt-4" >
        <span className="material-symbols-outlined me-3 ">social_leaderboard</span>
        <a href="" className="nav-link navShrink">Awards & Honours </a>
        </div>
        <div className="nav-item d-flex align-items-center justify-content-start mt-4 ">
        <span className="material-symbols-outlined me-3 active ">info</span>
        <a href="" className="nav-link navShrink active">About Us </a>
        </div>
        <div className="nav-item d-flex align-items-center justify-content-start mt-4">
        <span className="material-symbols-outlined me-3 ">paid</span>
        <a href="" className="nav-link navShrink">Payment info </a>
        </div>
    </div>
    <div className="container mt-4 ">

        <Help />
    </div>
</div>
  )
}
