import React from 'react'

const Noteitem = (props) => {
  const  {note}=props;
  return (
    <div className='col-md-3 my-5'> 
        <div className="card" style={{width: "22rem", height: "15rem"}}>
  <div className="card-body">
    <div className='d-flex align-items-center'>
    <h5 className="card-title">Title: {note.title}
    <i className="fa-sharp fa-solid fa-trash mx-3"></i>
    <i className="fa-regular fa-pen-to-square"></i></h5>
    </div>
    <p className="card-text">Description: {note.description}</p>
   

  </div>
</div>
    </div>
  )
}

export default Noteitem