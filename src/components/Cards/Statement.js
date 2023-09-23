import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StatementCanvas from './OffCanvasMore/StatementCanvas'
export default function Statement() {
    return (
        <>

            <div className="card shadow" style={{ width: "25rem", height: "13rem" }}>
                <div className="container row align-items-center p-4">
                    <div className="col d-flex align-items-center me-5">
                        <FontAwesomeIcon icon="fa-sharp fa-solid fa-quote-left" className="text-muted" />
                        <h3 className='mt-2 ms-1 col-auto'>Statement</h3>
                    </div>
                    <span className="col-1 material-symbols-outlined text-danger ms-5" data-bs-toggle="offcanvas" data-bs-target="#statementCanvas" aria-controls="offcanvasRight" style={{cursor:"pointer"}}> edit </span>
                </div>

                <div className="row m-3 d-flex ">
                    <span className='col'>You think it we ink it.</span>
                    <span className='col-auto border-1 bg-danger rounded-5 align-items-center justify-content-center  bg-opacity-25'><p className='mt-2' style={{ color: "red" }}>+1</p></span>
                </div>
            </div>

            {/* offcanvas  */}
            <div className="offcanvas offcanvas-end " tabindex="0" id="statementCanvas" aria-labelledby="offcanvasRightLabel" style={{ width: "600px" }} >
                <div className="offcanvas-header d-flex justify-content-start ">
                    <span class="material-symbols-outlined " data-bs-dismiss="offcanvas" aria-label="Close">arrow_back</span>


                    <h1 id="offcanvasRightLabel" className='ms-4 float-start'>Statement</h1>

                    <div className="d-flex text-danger " style={{marginLeft:"17rem"}} >
                    <span class="material-symbols-outlined ">add_circle</span>
                    <h5>Add</h5>
                    </div>


                </div>
                <span className="container text-muted  p-3 " style={{ fontSize: "1.3rem" }}>Write down  the statements of the company into convey your vision to the potential customer</span>
                <div className="offcanvas-body">
                <StatementCanvas/> 
                    
                </div>
            </div>
        </>
    )
}
