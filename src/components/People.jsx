import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const People = (props) => {
    
    const [info, setInfo] = useState({});
    // const {people} = useParams();
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}/?format=json`)
        .then(e => {
            console.log(e.data);
            setInfo(e.data);
        })
        .catch(err => {
            console.error(err);
            setInfo({error: "Please pick an id number between 1-83!"});
        });
    }, [id]);

    return (
        <div style={{textAlign: "center", backgroundColor: "skyblue" , height:"50vh"}}>
            {info.error ?
            <h1>{info.error}✔</h1> :
            <div>
                <h1>{info.name}⚔</h1>
                <p>
                    Height: {info.height}<br/>
                    Mass: {info.mass}<br/>
                    Skin color: {info.skin_color}<br/>
                    Hair Color: {info.hair_color}
                </p>
            </div>
            }
        </div>
    );
}

export default People;