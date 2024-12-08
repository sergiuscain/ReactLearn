import axios from "axios";
import React from "react";

const AddNoteBlock = (props) =>{
    return(
        <div className="btn">
            <p className="purpTextleStyle">Заголовок:</p>
            <input placeholder="Введите заголовок" className="inputBlock"/><br/>
            <p className="purpTextleStyle">Описание</p>
            <textarea placeholder="Введите описание" rows={2} className="inputBlock"/><br/>
            <button className="btn createBtn" onClick={props.AddNote}>Создать</button>
        </div>
    )
}

export default AddNoteBlock;