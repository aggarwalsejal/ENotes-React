import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'

function AddNote() {
    const context=useContext(noteContext);
    const {addNote} =context;
    const[note, setNotes]=useState({title: "", description: "", tag: ""})
    const handleclick = (e) => {
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
    }
    const onChange = (e) => {
        setNotes({...note, [e.target.name]:e.target.value})
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
                <div className="mb-3 mt-5">
                    <label htmlFor="tag" className="form-label"><strong>Tag</strong></label>
                    <input type="tag" className="form-control"  name="tag" id="tag" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddNote