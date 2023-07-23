import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{
    const notesInitial=[
        {
          "_id": "64ba1af9acf18e60221e1dff",
          "user": "64ba0083c7952154b64a5742",
          "title": "unique h bhai 2",
          "description": "mst h bilkul yeh to 2",
          "tag": "General",
          "date": "2023-07-21T05:43:21.641Z",
          "__v": 0
        }
      ]
      const[notes,setNotes]=useState(notesInitial);


    return(
        <NoteContext.Provider value={{notesInitial,setNotes}} >
          {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;