import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote';
import Noteitem from './Noteitem';

const Notes=() =>{
    const context=useContext(noteContext);
    // eslint-disable-next-line
    const{notes, addNote}=context;

  return (
      <>
      <AddNote />
    <div className='row my-3'>
    <h2>Your Notes to View</h2>
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} />
                })}
         </div>
         </>
  )
}

export default Notes