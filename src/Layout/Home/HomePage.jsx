import React, {useState, useEffect} from "react";
import axios from 'axios'
import TopMenu from "../General/NavMenu";
import Content from "./Content";
import Footer from "../General/Footer";

const baseApiUrl = process.env.BASE_API_URL;

const AddNote = (titleText, descriptionText) =>{
    const note = {
        userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        title: {titleText},
        description: {descriptionText}
    };
    alert(`title=${titleText} description=${descriptionText}`);
};


const HomePage = () => {

    const [notes, setNotes] = useState([])
    const urlGet = `${baseApiUrl}/getbyid`;
    useEffect(() => {
        axios.get(urlGet).then(
            res => setNotes.log(res.data)
        );
    })

    return(
        <div>
            <TopMenu/>
            <Content 
                notes={notes}
                AddNote={AddNote}
            />
            <Footer/>
        </div>
    )
}

export default HomePage;