import React from 'react'
import Address from '../Cards/Address'
import Contact from '../Cards/Contact'
import HOP from '../Cards/HOP'
import SocialMedia from '../Cards/SocialMedia'
import Statement from '../Cards/Statement'
export default function MainCards() {
    return (
<div className="container-fluid ">
<div className="row  row-cols-auto flex-md-wrap justify-content-lg-start justify-content-sm-center justify-content-md-center  ">
        <div className="col-auto m-2 "><Contact/></div>
        <div className="col-auto m-2 "><Address/></div>
        <div className="col-auto m-2 "><HOP/></div>
        <div className="col-auto m-2 "><SocialMedia/></div>
        <div className="col-auto m-2 "><Statement/></div>

      
       
</div>


</div>   




    )
}
