import React from "react";

const AddNoteBlock = () =>{
    return(
        <div className="btn">
            <p className="purpTextleStyle">Заголовок:</p>
            <input className="inputBlock"/><br/>
            <p className="purpTextleStyle">Описание</p>
            <input className="inputBlock"/><br/>
            <button className="btn createBtn">Создать</button>
        </div>
    )
}

export default AddNoteBlock;