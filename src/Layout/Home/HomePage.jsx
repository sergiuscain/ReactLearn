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
        "description": "description1"
    },
    {
        "id":1,
        "title": "Title1",
        "description": "description1"
    },
    {
        "id":1,
        "title": "Title1",
        "description": "description1"
    },
    {
        "id":1,
        "title": "Title1",
        "description": "description1"
    },
    {
        "id":1,
        "title": "Title1",
        "description": "description1"
    },
    {
        "id":1,
        "title": "Title1",
        "description": "description1"
    },
    {
        "id":1,
        "title": "Title1",
        "description": "description1"
    },
    {
        "id":1,
        "title": "Title1",
        "description": "description1"
    },
    {
        "id":1,
        "title": "Title1",
        "description": "description1"
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