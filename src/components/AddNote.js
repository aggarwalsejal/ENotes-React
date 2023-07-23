import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

function AddNote() {
    const context=useContext(noteContext);
    const {addNote} =context;
    const[note, setNote]=useState({title: "", description: "", tag: "default"})
    const handleclick = (e) => {
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
    }
    const onChange = (e) => {
        setNote({...note, [e.target.name]:e.target.value})
    }
  return (
     <div>
        <div className='container my-3'>
            <h2>Add a Note</h2>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"><strong>Title</strong></label>
                    <input type="title" className="form-control"   id="title" name="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3 mt-5">
                    <label htmlFor="desc" className="form-label" onChange={onChange}><strong>Description</strong></label>
                    <input type="desc" className="form-control"  name="desc" id="desc" />
                </div>
                <div className="mb-3 form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label className="form-check-label">
    Check me out
  </label>
</div>
                <button type="submit" className="btn btn-primary" onClick={handleclick}>Add Note</button>
            </form>
        </div>
    </div>
  )
}

export default AddNote