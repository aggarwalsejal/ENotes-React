import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{
    const notesInitial=[
      ]
      const[notes,setNotes]=useState(notesInitial);

//Add a note
const addNote = (title, description, tag)=>{
  const note= {
    "user": "64ba0083c7952154b64a5742",
    "title": "can you please do the same for me",
    "description": "I can do that for",
    "tag": "General",
    "_id": "64bd02becd7214a634fde3e9",
    "date": "2023-07-23T10:36:46.019Z",
    "__v": 0
  };
setNotes(notes.concat(note));
}

//Delete a note
const deleteNote = ()=>{

}
//Edit a note
const editNote =()=>{

}

    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}} >
          {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;