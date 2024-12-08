import axios from "axios";
import React, { useState } from "react";


const AddNoteBlock = (props) =>{
    const [titleText, setTitleText] = useState("");
    const [descriptionText, setDescriptionText] = useState("");
    
    const submit = () => {
        if (titleText === "" || descriptionText === "") return;
        props.AddNote(titleText, descriptionText);
        setTitleText("");
        setDescriptionText("");
    }
    return(
        <div className="btn">
            <form>
                <div>
                    <p className="purpTextleStyle">Заголовок:</p>
                    <input placeholder="Введите заголовок" 
                    className="inputBlock" 
                    value={titleText}
                    onChange={(e) => {setTitleText(e.target.value)}}
                    /><br/>
                    <p className="purpTextleStyle">Описание</p>
                    <textarea placeholder="Введите описание" 
                    rows={2} 
                    className="inputBlock" 
                    value={descriptionText}
                    onChange={(e) => {setDescriptionText(e.target.value)}}
                    /><br/>
                </div>
                <div>
                    <button className="btn createBtn" onClick={() => {submit();}}>Создать</button>
                </div>
            </form>
        </div>
    )
}

export default AddNoteBlock;