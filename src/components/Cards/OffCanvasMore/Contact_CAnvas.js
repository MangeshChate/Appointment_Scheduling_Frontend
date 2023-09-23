import React, { useState } from 'react'

export default function Contact_CAnvas() {

    const contact = [
        {
            contact_name: "Dr Luffy",
            email: "luffy@br.in",
            mob_num_1: 867320397524,
            mob_num_2: 349085983494

        },
        {
            contact_name: "Dr Zoro",
            email: "zoro@br.in",
            mob_num_1: 867320397524,
            mob_num_2: 349085983494

        },
        {
            contact_name: "Dr nami",
            email: "salesteam@br.in",
            mob_num_1: 867320397524,
            mob_num_2: 349085983494

        }
    ]

    const[card ,setCard ] = useState(true);
    const[edit ,setEdit ] = useState(false);

    const cardHandler = () =>{
        setCard(true);
        setEdit(false);
    }
    const editHandler = ()=>{
        setCard(false);
        setEdit(true);
    }

    return (
        <div>
        {card && (
            <>

            {contact.map((data, key) => {
                return (

                    <div className="card shadow p-3 m-4" key={key}>
                        <div className="container row align-items-center p-3 ">
                            <div className="col d-flex align-items-center ms-2">
                                <span className="material-symbols-outlined text-dark text-muted text-opacity-75 me-2"> contacts</span>
                                <h3 className='mt-2 ms-1'>{data.contact_name}</h3>
                            </div>
                            <div className="col-auto containe">
                                <span className=" material-symbols-outlined text-danger me-3 " style={{ cursor: "pointer" }}>delete</span>
                                <span className=" material-symbols-outlined text-danger   " style={{ cursor: "pointer" }} onClick={editHandler}>  edit </span>

                            </div>
                        </div>

                        <div className="row m-3 mb-4 d-flex " >
                            <span className="col-auto material-symbols-outlined text-opacity-75 me-1 text-muted"> mail </span>
                            <div className="col">
                                <span className=''>{data.email} </span>/
                                <span className=""> salesteam2@br.in </span>
                            </div>

                        </div>
                        <div className="container m-1 align-items-center justify-content-center row">
                            <span className=" col-auto material-symbols-outlined text-muted "> call</span>
                            <span className='col'>+91 {data.mob_num_1} / {data.mob_num_2}</span>
                        </div>
                    </div>
                )
            })}
            </>
        )}
        {edit && (
            <>
                <div className="d-flex flex-column container" style={{marginBottom:"20rem"}}>
                 <span className="text-muted container " style={{marginTop:"-1rem"}}>Please provide the company's email & contact</span>
                <hr />
                <div className="form flex-column">
                    <label htmlFor="email"className='form-label fw-bold'>Email ID</label>
                    <input type="email" className='form-control text-muted p-3 mt-2 mb-4' placeholder='eg. salesteam@br.in' />
                    <button className="btn container-fluid  text-danger fw-bold p-3" style={{backgroundColor:"rgba(236, 190, 152, 0.821)"}}>
                    <div className="d-flex justify-content-center">
                    <span className=" material-symbols-outlined fw-bolder">add_circle</span>
                    <span className='fw-bolder ms-2'>Add More</span>

                    </div>
                    </button>
                </div>

                <div className="form flex-column mt-5 " >
                    <label htmlFor="email"className='form-label fw-bold'>Contact Number</label>
                    <input type="number" className='form-control text-muted p-3 mt-2 mb-4' placeholder='eg. 82394856211' />
                    <button className="btn container-fluid  text-danger fw-bold p-3" style={{backgroundColor:"rgba(236, 190, 152, 0.821)"}}>
                    <div className="d-flex justify-content-center">
                    <span className=" material-symbols-outlined fw-bolder">add_circle</span>
                    <span className='fw-bolder ms-2'>Add More</span>

                    </div>
                    </button>
                </div>
                </div>
            </>
        )}

            {/* //save button  */}
            <div className="container ">
                <div className="btn btn-danger container-fluid p-3" onClick={cardHandler}>Save</div>
            </div>

            {/* //contact modal  */}
            
        </div>
    )
}
