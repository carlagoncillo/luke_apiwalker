import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Planets = (props) => {
    const [info, setInfo] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/?format=json`)
        .then(e => {
            console.log(e.data);
            setInfo(e.data);
        })
        .catch(err => {
            console.error(err);
            setInfo({error: "Please pick an id number between 1-60!"});
        });
    }, [id]);

    return (
        <div style={{textAlign: "center", backgroundColor: "skyblue" , height:"50vh"}}>
            {info.error ?
            <h1>{info.error}🚀</h1> :
            <div>
                <h3>{info.name}🌐</h3>
                <p>
                    Climate: {info.climate}<br/>
                    Terrain: {info.terrain}<br/>
                    Surface Water: {info.surface_water ? "true" : "false"}<br/>
                    Population: {info.population}
                </p>
            </div>
            }
        </div>
    );
}

export default Planets;