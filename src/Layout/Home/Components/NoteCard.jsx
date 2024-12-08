import React from "react";

const NoteCard = (props) => {
    return(
        <div key={props.data.id} className="col-3 m-1 card myCardParam">
            <h5>{props.data.title}</h5>
            <p>{props.data.description}</p>
        </div>
    )
}

export default NoteCard;