import React, {useState, useEffect} from "react";
import axios from 'axios'
import TopMenu from "../General/NavMenu";
import Content from "./Content";
import Footer from "../General/Footer";

const url = "https://jsonplaceholder.typicode.com/posts";

const HomePage = () => {
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then(res => {
            setLabels(res.data.slice(0,50));
        });
    });

    return(
        <div>
            <TopMenu/>
            <Content 
                setOfLabels={labels}
            />
            <Footer/>
        </div>
    )
}

export default HomePage;