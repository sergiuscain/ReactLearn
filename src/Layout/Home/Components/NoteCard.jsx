import React from "react";

const NoteCard = (props) => {
    return(
        <div key={props.data.id} className="col-3 m-1 card myCardParam">
            <div className="card-body">
                <h5 className="card-title">{props.data.title}</h5>
                <p className="card-text">{props.data.description}</p>
            </div>
        </div>
    )
}

export default NoteCard;