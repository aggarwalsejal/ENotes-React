import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';

const Noteitem = (props) => {
  const context=useContext(noteContext);
  const {deleteNote}=context;
  const  {note, updateNote }=props;
  return (
    <div className='col-md-3 my-3'> 
        <div className="card my-3" style={{width: "22rem", height: "15rem"}}>
  <div className="card-body">
    <div className='d-flex align-items-center'>
    <h5 className="card-title">Title: {note.title}
    <i className="fa-sharp fa-solid fa-trash mx-3" onClick={()=>{deleteNote(note._id)}}></i>
    <i className="fa-regular fa-pen-to-square" onClick={()=>{updateNote(note)}}></i></h5>
    </div>
    <p className="card-text">Description: {note.description}</p>
   

  </div>
</div>
    </div>
  )
}

export default Noteitem