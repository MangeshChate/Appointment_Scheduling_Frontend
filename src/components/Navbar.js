import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <a className="navbar-brand flex-column d-flex justify-content-center align-items-center">
          <span className='navbar-icon d-flex align-items-center row ms-2 '>
            <img src="https://static.toiimg.com/thumb/msid-51767839,width-400,resizemode-4/51767839.jpg" alt="" className='col rounded-circle img-fluid' style={{ width: "5rem", height: "3rem", borderRadius: "6rem" }} />
            <h3 className='col mt-2 '>Dr Chopper</h3>
          </span>
 
        </a>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between align-items-center " id="navbar">

          <div class="input-group " style={{ width: "500px", marginLeft: "9.5rem" }} >
            <span class="input-group-append">
              <button class="btn btn-outline-secondary bg-light border-end-0 border " type="button">
                <span class="material-symbols-outlined text-muted">search</span>
              </button>
            </span>
            <input class="form-control bg-light border-start-0 border  " type="text" value="Search..." id="example-search-input" />
          </div>



          <div className="d-flex align-items-center "  >
          <button className="btn btn-danger fw-bold  btn-lg shadow btn-lg "  >
            Login
          </button>

            <div className='d-flex ms-5 align-items-center'>

            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" className='shadow' style={{borderRadius:"50%"}} alt="" width="50rem"  />
            <ul class="navbar-nav ">

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  User Admin
                </a>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                  <li><a class="dropdown-item" href="#">About</a></li>
                  <li><a class="dropdown-item" href="#">Setting</a></li>
                </ul>
              </li>
            </ul>
            </div>
          </div>
        </div>
      
      </div>


    </nav>
  )
}
