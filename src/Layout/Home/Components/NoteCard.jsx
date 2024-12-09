import React from "react";


const NoteCard = (props) => {
    const deleteNoteEvent = (id) => {
    props.DeleteNote(id);
    }
    return(
        <div key={props.data.id} className="col-3 m-1 card  myCardParam">
            <div className="card-body">
                <h5 className="card-title">{props.data.title}</h5>
                <p className="card-text">{props.data.description}</p>
                <div className="align-bottom">
                    <button className="btn btn-danger align-self-end" onClick={() =>{deleteNoteEvent(props.data.id);}}>Удалить</button>
                </div>
            </div>
        </div>
    )
}

export default NoteCard;