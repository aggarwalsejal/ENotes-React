import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) =>{
    const s1={
        "name":"Sejal"
    }
    const[state, setState]=useState();
    return(
        <NoteContext.Provider value={state} >
          {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;