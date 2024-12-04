import React, {useState, useEffect} from "react";
import axios from 'axios'
import TopMenu from "../General/NavMenu";
import Content from "./Content";
import Footer from "../General/Footer";

const url = "https://jsonplaceholder.typicode.com/posts";

const HomePage = () => {
    const [labels, setLabels] = useState([{
        id: 11,
        title: "Title 1",
        text: "text of body"
    }]);

    useEffect(() => {
        axios.get(url)
        .then(res => {
            const temp = [];

            res.data.slice(0,50).forEach(item => {
                temp.push({
                    id: item.id,
                    title: item.title,
                    text: item.body
                })
            });
            setLabels(temp);
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