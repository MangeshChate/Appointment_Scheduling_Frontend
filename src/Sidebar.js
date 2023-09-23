import React from 'react'

export default function Sidebar() {
  return (
    <div>

      <div className='bg-white'>
        <i className='bi bi-bootstrap-fill'></i>
        <span className="brand-name fs-4">Hello</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <a href="" className="list-group-item list-group-item-action my-2">
            <i className="speedmeter2"></i>
            <span>DashBoard</span>
        </a>
        <a href="" className="list-group-item list-group-item-action my-2">
            <i className=" bi bi-house speedmeter2"></i>
            <span>Home</span>
        </a>
      </div>
    </div>
  )
}
