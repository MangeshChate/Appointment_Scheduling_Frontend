import React from 'react'
import Address_canvas from './OffCanvasMore/Address_canvas'
export default function Address() {
  return (
    <>

        <div className="card shadow" style={{ width: "25rem", height: "13rem" }}>
            <div className="container row align-items-center p-4">
                <div className="col d-flex align-items-center me-5">
                <span class="material-symbols-outlined text-muted ms-1">home_pin</span>
                    <h3 className='mt-2 ms-1'>Address</h3>
                </div>
                <span className="col-1 material-symbols-outlined text-danger ms-5" data-bs-toggle="offcanvas" data-bs-target="#addressCanvas" aria-controls="offcanvasRight" style={{cursor:"pointer"}}> edit </span>
            </div>

            <div className="row m-3 d-flex p-2 w-75">
            <span>C-1 / 3514, GiDC makarpura, Vadodara-3992345, Gujrat, India</span>
            </div>
        </div>

        {/* offcanvas  */}
        <div className="offcanvas offcanvas-end " tabindex="0" id="addressCanvas" aria-labelledby="offcanvasRightLabel" style= {{width:"600px"}} >
                <div className="offcanvas-header d-flex justify-content-start">
                <span class="material-symbols-outlined"data-bs-dismiss="offcanvas" aria-label="Close">arrow_back</span>
                    
                    
                    <h1 id="offcanvasRightLabel" className='ms-4 float-start'>Address</h1>
                </div>
                <div className="offcanvas-body">
                    <Address_canvas/>
                </div>
            </div>
    </>
  )
}
