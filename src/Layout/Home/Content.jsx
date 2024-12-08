import React, {useState, useEffect} from "react";
import axios from 'axios'
import NoteCard from "./Components/NoteCard";


const Content = (props) => {

    return(
        <div>
            <div className="row ps-3">
            {
                props.notes.map((item, index) =>
                    <NoteCard data={item}/>
            )}
            </div>
        </div>
    )
}

export default Content;