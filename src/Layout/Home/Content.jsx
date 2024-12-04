import React, {useState, useEffect} from "react";
import axios from 'axios'


const Content = (props) => {

    return(
        <div>
            <div className="row ps-3">
            {
                props.setOfLabels.map((item, index) =>
                    <div className="col-3 m-1 card myCardParam">
                            <h5>{item.title}</h5>
                            <p>{item.body}</p>
                    </div>
            )}
            </div>
        </div>
    )
}

export default Content;