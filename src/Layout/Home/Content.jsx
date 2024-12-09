import React, {useState, useEffect} from "react";
import axios from 'axios'
import NoteCard from "./Components/NoteCard";
import AddNoteBlock from "./Components/AddNoteBlock";


const Content = (props) => {

    return(
        <div className="row">
            <AddNoteBlock 
                AddNote={props.AddNote}
            />
            <div className="row ps-5">
            {
                props.notes.map((item, index) =>
                    <NoteCard 
                    data={item}
                    DeleteNote={props.DeleteNote}
                    />
            )}
            </div>
        </div>
    )
}

export default Content;