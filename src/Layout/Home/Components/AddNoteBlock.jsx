import React from "react";

const AddNoteBlock = () =>{
    return(
        <div className="btn">
            <input value="Заголовок"/><br/>
            <input value="Описание"/>
            <button>Создать</button>
        </div>
    )
}

export default AddNoteBlock;