import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import SocialCanvas from './OffCanvasMore/SocialCanvas'
export default function SocialMedia() {
  return (
    <>

    <div className="card shadow" style={{ width: "25rem", height: "13rem" }}>
    <div className="container row align-items-center p-4">
        <div className="col d-flex align-items-center me-5">
        <span class="material-symbols-outlined text-muted">link</span>
            <h3 className='mt-2 ms-1 col-auto'>Socio Media & Links</h3>
        </div>
        <span className="col-1 material-symbols-outlined text-danger ms-5" data-bs-toggle="offcanvas" data-bs-target="#socialCanvas" aria-controls="offcanvasRight" style={{cursor:"pointer"}}> edit </span>
    </div>

    <div className="row m-3  p-2">
    <div className="col d-flex flex-column justify-content-center align-items-center">
    <span class="material-symbols-outlined  text-muted" style={{fontSize:"2rem"}}>public</span>
    <span className=''>Website</span>
    </div>

    <div className="col d-flex flex-column justify-content-center align-items-center">
    <FontAwesomeIcon icon="fa-brands fa-instagram" className="text-muted" style={{fontSize:"2rem"}}/>
    <span>Instagram</span>
    </div>

    <div className="col d-flex flex-column justify-content-center align-items-center">
    <FontAwesomeIcon icon="fa-brands fa-facebook " className='text-muted' style={{fontSize:"2rem"}}/>
    <span>Facebook</span>
    </div>

    <div className="col d-flex flex-column justify-content-center align-items-center">
    <FontAwesomeIcon icon="fa-brands fa-twitter" className='text-muted' style={{fontSize:"2rem"}}/>
    <span>Twitter</span>
    </div>
    </div>
</div>

   {/* offcanvas  */}
   <div className="offcanvas offcanvas-end " tabindex="0" id="socialCanvas" aria-labelledby="offcanvasRightLabel" style= {{width:"600px"}} >
                <div className="offcanvas-header d-flex justify-content-start ">
                <span class="material-symbols-outlined "data-bs-dismiss="offcanvas" aria-label="Close">arrow_back</span>
                    
                    
                <h1 id="offcanvasRightLabel" className='ms-4 float-start'>Social Media & Links</h1>
                    
                </div>
                <span className="container text-muted   " style={{fontSize:"1.3rem"}}>Please provide the links to the social media accounts & website of the company</span>
                <div className="offcanvas-body">
                    <SocialCanvas/>
                </div>
    </div>
    </>
  )
}
