import React, {useState, useEffect} from "react";
import axios from 'axios'
import TopMenu from "../General/NavMenu";
import Content from "./Content";
import Footer from "../General/Footer";

const url = "https://localhost:7210/api/Notes/GetById?id=22c98a74-2913-4284-8b9c-b3e528838ba1";
const notes = [
    {
        "id":1,
        "title": "Title1",
        "description": "descriptLorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus totam ullam rationion1"
    },
    {
        "id":1,
        "title": "Title1",
        "description": "descriptiLorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus totam ullam rationLorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus totam ullam rationon1"
    },
    {
        "id":1,
        "title": "Title1",
        "description": "descLorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus totam ullam rationription1"
    },
    {
        "id":1,
        "title": "Title1",
        "description": "desLorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus totam ullam rationcription1"
    },
    {
        "id":1,
        "title": "Title1",
        "description": "description1"
    },
    {
        "id":1,
        "title": "Title1",
        "description": "descripLorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus totam ullam rationtion1"
    },
    {
        "id":1,
        "title": "Title1",
        "description": "description1"
    },
    {
        "id":1,
        "title": "Title1",
        "description": "descripLorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus totam ullam rationLorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus totam ullam rationLorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus totam ullam rationtion1"
    },
    {
        "id":1,
        "title": "Title1",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus totam ullam rationLorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus totam ullam rationLorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus totam ullam ratione, error voluptas doloremque! Aut magni excepturi amet ad ea dicta est quas, expedita inventore delectus, ab quibusdam."
    },
]

const HomePage = () => {

    return(
        <div>
            <TopMenu/>
            <Content 
                notes={notes}
            />
            <Footer/>
        </div>
    )
}

export default HomePage;