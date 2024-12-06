import {useEffect, useState} from "react";
import {forEach} from "react-bootstrap/ElementChildren";

function ToDo(){
    useEffect(() => {
    fetch('http://localhost:5085/api/SurveyService')
        .then(res => res.json())
        .then(data => setData(data));
    },[]);

    const [data, setData] = useState(data);

    return(
        <div className="App">
            {}
        </div>
    )
}