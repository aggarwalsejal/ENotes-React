import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import { toast } from "react-toastify";

function AddNote(props) {
    const context=useContext(noteContext);
    const {addNote} =context;
    const[note, setNote]=useState({title: "", description: "", tag: ""})
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title: "", description: "", tag: ""})
        toast.dismiss();
      toast.success("Added successfully", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    const onChange = (e) => {
        setNote({...note, [e.target.name]:e.target.value})
    }
  return (
     <div>
        <div className='container my-3'>
            <h2>Add a Note</h2>
            <form className='my-5'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"><strong>Title</strong></label>
                    <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onChange} minLength={5} required /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label" onChange={onChange}><strong>Description</strong></label>
                    <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label"><strong>Tag</strong></label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange} minLength={5} required />
                </div>
                <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary mt-4" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    </div>
  )
}

export default AddNote