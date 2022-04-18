import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const Form = (props) => {
    const [character, setCharacter] = useState("people");
    const [id, setId] = useState();
    const history = useHistory();

    const submit = (e) => {
        e.preventDefault();
        history.push(`/${character}/${id}`);
    }

    return(
        <div style={{textAlign: "center"}}>
            <form onSubmit={submit}>
                <label>Search for: </label>
                <select onChange={e => setCharacter(e.target.value)} value={character}>
                    <option>People</option>
                    <option>Planets</option>
                </select>
                <label> ID: </label>
                <input type="text" onChange={e => setId(e.target.value)} value={id} min={1}/>
                <input type="submit" value="Submit👽" />
            </form>
        </div>
    );
}

export default Form;