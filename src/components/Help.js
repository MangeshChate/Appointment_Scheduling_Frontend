import React from 'react'

export default function Help() {
  return (
    <div className="card navShrink" style={{width: "200px"}}>
    <div className="card-body p-4 d-flex flex-column justify-content-center align-items-center ">
        <span className="material-symbols-outlined text-muted">maps_ugc</span>
        <h6 className="mt-2">Need Help?</h6>
    
   
        <p className="mt-3" >
            Our Support team is at your disposal 
        </p>
        <button className="btn btn-dark">Get Help</button>
    </div>
</div>
  )
}
