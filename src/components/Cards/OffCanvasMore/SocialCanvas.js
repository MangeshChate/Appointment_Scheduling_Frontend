import React from 'react'

export default function SocialCanvas() {
  return (
    <>
   
    <div className="d-flex flex-column container" style={{ marginBottom: "10rem" }}>
      <div className="form d-flex flex-column  justify-content-start " >
        <label htmlFor="instagram" className="form-label  ms-3" style={{fontSize:"1.3rem"}}>Instagram</label>
        <input type="text" id="instagram" className="form-control m-3  p-3 " placeholder='eg.  www.instagram/comapnayname'/>
        <label htmlFor="facebook" className="form-label  ms-3" style={{fontSize:"1.3rem"}}>Facebook</label>

        <input type="text" id='facebook' className="form-control m-3  p-3  " placeholder='eg.  www.facbook.com/companyname'/>
        <label htmlFor="twitter" className="form-label  ms-3" style={{fontSize:"1.3rem"}}>Twitter</label>

        <input type="text" id="twitter" className="form-control m-3  p-3 " placeholder='eg.  www.twitter.com/companyname'/>

        <label htmlFor="website" className="form-label  ms-3"style={{fontSize:"1.3rem"}}>Website</label>

        <input type="text" id="website" className="form-control m-3  p-3 " placeholder='eg.  www.companyname.com'/>
      
      
      </div>
    </div>


    {/* //save button  */}
    <div className="container ">
        <div className="btn btn-danger container-fluid p-3">Save</div>
    </div>
</>
  )
}
