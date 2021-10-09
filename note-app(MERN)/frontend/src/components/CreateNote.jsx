import React, {useState} from "react";
import axios from "axios";

function CreateNote() {
    const [input, setInput] = useState({
        title: '',
        content: ''
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newNote = {
            title: input.title,
            content: input.content
        }
        axios.post('http://localhost:3001/create', newNote);
    }
 
    return (
        <div className="container">
            <h1>Create Note Page</h1>
            <form>
                <div className="form-group">
                    <input onChange={handleChange} name="title" autoComplete="off" className="form-control" placeholder="note title"></input>
                </div>

                <div className="form-group">
                    <textarea onChange={handleChange} name="content" autoComplete="off" className="form-control" placeholder="note content"></textarea>
                </div>

                <button onClick={handleClick} className="btn btn-lg btn-info">ADD NOTE</button>
            </form>
        </div>
    )
}

export default CreateNote;