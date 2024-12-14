import React, {useState, useEffect} from "react";
import axios from 'axios'
import TopMenu from "../General/NavMenu";
import Content from "./Content";
import Footer from "../General/Footer";
import { Route, Routes } from "react-router-dom";



const HomePage = () => {
    const baseApiUrl = process.env.REACT_APP_API_URL;
    const [notes, setNotes] = useState([])

    const AddNote = (titleText, descriptionText) =>{
          axios.post(baseApiUrl, 
            {
                userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                title: `${titleText}`,
                description: `${descriptionText}`,
              }
        );
                         alert(`попытка создать заметку. Titile: ${titleText}, des: ${descriptionText}`); //Временная строчка
    };

    const DeleteNote = (id) =>{
        // alert(`Попытка удалить карту с  id: ${id}`);
        axios.delete(`${baseApiUrl}?id=${id}`);
    };
    
    useEffect(() => {
        axios.get(baseApiUrl).then(
            res => setNotes(res.data)
        );
    })

    return(
        <div>
            <Routes>
                <Route path="/" element={
                    <div>
                        <TopMenu/>
                        <Content 
                            notes={notes}
                            AddNote={AddNote}
                            DeleteNote={DeleteNote}
                            />
                        <Footer/>
                    </div>
                }/>
                <Route path="note/:id" element={
                    <div>
                        <h1>Note</h1>
                    </div>
                }/>
            </Routes>
        </div>
    )
}

export default HomePage;