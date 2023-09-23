import React from 'react'

export default function HOP() {
  return (
    <div className="card shadow" style={{ width: "25rem", height: "13rem" }}>
            <div className="container row align-items-center p-4">
                <div className="col d-flex align-items-center me-5">
                <span class="material-symbols-outlined text-muted" >work_history</span>
                    <h3 className='mt-2 ms-1 col-auto'>Hours of operations</h3>
                </div>
                <span className="col-1 material-symbols-outlined text-danger ms-5"> edit </span>
            </div>

            <div className="row m-3  p-2">
            <span className='col-auto'>Monday to Friday </span> - 
            <span className='col'>09:00Am To 06:00Pm</span>
            </div>
    </div>
  )
}
