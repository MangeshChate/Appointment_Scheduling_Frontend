import React from 'react'
import Contact_CAnvas from './OffCanvasMore/Contact_CAnvas'
export default function Address() {
    return (
        <>
        <div className="card shadow" style={{ width: "25rem", height: "13rem" }}>
            <div className="container row align-items-center p-3 ">
                <div className="col d-flex align-items-center ms-2">
                    <span className="material-symbols-outlined text-dark text-muted text-opacity-75 me-2"> contacts</span>
                    <h3 className='mt-2 ms-1'>Contact</h3>
                </div>
                <span className="col-1 material-symbols-outlined text-danger ms-5  " data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{cursor:"pointer"}}>  edit </span>
            </div>

            <div className="row m-3 d-flex ">
                <span className="col-auto material-symbols-outlined text-opacity-75 me-1 text-muted"> mail </span>
                <div className="col">
                    <span className=''>salesteam@br.in</span>/ <br />
                    <span className="">salesteam2@br.in </span>
                </div>
                <span className='col-auto border-1 bg-danger rounded-5 align-items-center justify-content-center  bg-opacity-25'><p className='mt-2' style={{ color: "red" }}>+5</p></span>
            </div>
            <div className="container m-1 align-items-center justify-content-center row">
                <span className=" col-auto material-symbols-outlined text-muted "> call</span>
                <span className='col'>+91 8511591740 / 8000058214</span>
            </div>
        </div>

        {/* offcanvas */}
        <div className="offcanvas offcanvas-end " tabindex="0" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style= {{width:"600px"}} >
                <div className="offcanvas-header d-flex justify-content-start">
                    
                    <span className="material-icons-outlined text-reset btn btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></span>
                    
                    <h1 id="offcanvasRightLabel" className='ms-4 float-start'>Contact</h1>
                </div>
                <div className="offcanvas-body">
                    <Contact_CAnvas/>
                </div>
        </div>
        </>
    )
}
