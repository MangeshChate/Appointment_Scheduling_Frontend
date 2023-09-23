import React from 'react'

export default function StatementCanvas() {
  
  const statements  = [
    {
      statement:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequuntur nulla voluptatem reprehenderit consequatur blanditiis placeat eius explicabo mollitia nemo  corrupti ea."
    },
    {
      statement:"Lorem ipsum dolor sit amet consectetur adipisicing elit. At consequuntur nulla voluptatem reprehenderit consequatur blanditiis placeat eius explicabo mollitia nemo  corrupti ea."

    }
  ]



  return (
    <>
   
    {
      statements.map((item)=>{
        return (
    <div className="d-flex flex-column container" style={{ marginBottom: "2rem" }}>

     <div className="container card">
        <div className="card-body">
            <div className="row ">
                <div className="col me-5">
                <span class="material-symbols-outlined text-muted" style={{fontSize:"3rem"}}>format_quote</span>
                </div>
                <div className="col-auto text-danger ms-5" style={{marginLeft:"8rem"}}>
                <span class="material-symbols-outlined me-3">delete</span>
                <span class="material-symbols-outlined">edit</span>
                </div>
               <div className="card-body">
               <p style={{fontSize:"1.2rem"}}>
               {item.statement}
               </p>
               </div>

            </div>
        </div>
     </div>
    </div>
        )

      })
    }



</>
  )
}
