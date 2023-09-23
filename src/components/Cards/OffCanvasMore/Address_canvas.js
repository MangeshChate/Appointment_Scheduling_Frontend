import React from 'react'

export default function Address_canvas() {
    return (
        <>

            <div className="d-flex flex-column container" style={{ marginBottom: "10rem" }}>
              <div className="form d-flex flex-column justify-content-center align-items-center " >
                <input type="text" className="form-control m-3  p-3 ss" placeholder='Floor Number / Block No / Office Name'/>
                <input type="text" className="form-control m-3  p-3  " placeholder='Area / locality'/>
                <input type="text" className="form-control m-3  p-3 " placeholder='Nearest Landmark'/>
                <input type="text" className="form-control m-3  p-3 " placeholder='Town / City'/>
                <input type="text" className="form-control m-3  p-3  " placeholder='City'/>
                <input type="text" className="form-control m-3  p-3 " placeholder='Pincode'/>
              
              </div>
            </div>


            {/* //save button  */}
            <div className="container ">
                <div className="btn btn-danger container-fluid p-3">Save</div>
            </div>
        </>
    )
}
