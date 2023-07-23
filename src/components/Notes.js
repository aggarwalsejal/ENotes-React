import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';

const Notes=() =>{
    const context=useContext(noteContext);
    // eslint-disable-next-line
    const{notes, setNotes}=context;

  return (
      <>
    <div className='container my-5'>
    <h2>Your Notes to View</h2>
                {notes.map((note) => {
                    return <Noteitem key={note._id} note={note} />
                })}
         </div>
         </>
  )
}

export default Notes