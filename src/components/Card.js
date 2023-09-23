import React from 'react'

export default function Card() {
    // <span className="material-symbols-outlined text-opacity-75 me-1"> mail </span>
    // <span className="material-symbols-outlined text-dark text-muted text-opacity-75 me-2"> contacts</span>
    // <span className="material-symbols-outlined text-muted "> call</span>
    // {/* <span className="material-symbols-outlined text-danger"> edit </span> */ }
    return (
        <div className="div">

            <div className="card shadow" style={{ width: "25rem", height: "15rem" }}>
                <div className="container row align-items-center p-4">
                    <div className="col d-flex align-items-center me-5">
                        <span className="material-symbols-outlined text-dark text-muted text-opacity-75 me-2"> contacts</span>
                        <h3 className='mt-2 ms-1'>Contact</h3>
                    </div>
                    <span className="col-1 material-symbols-outlined text-danger ms-5" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> edit </span>
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

            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    ...
                </div>
            </div>
        </div>
    )
}
