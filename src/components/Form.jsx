import "./Form.css";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Form() {
    // const [genres, setGenres] = useState([])
    const [newSong, setNewSong] = useState({
        "title": "",
        "artist": "",
        "genres": [
        ],
        "album_cover": ""
    })

    console.log(newSong);

    function handlePost(newSong) {
        

        fetch("http://localhost:3000/songs", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(newSong)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        
    }

    return(<>
        <div id="body">
            <Navbar />  
            <form onSubmit={() => {handlePost(newSong)}}>
                <p>Ttitle</p>
                <input placeholder="Song title..." value={newSong.title} onChange={event => setNewSong({"title": event.target.value})}></input>
                <br></br>
                <p>Artist</p>
                <input placeholder="Artist name..." value={newSong.artist} onChange={event => setNewSong({"artist": event.target.value})}></input>
                <br></br>
                <p>Genre 1</p>
                <input placeholder="Genre 1..." onChange={event => setNewSong({"genres": [event.target.value, ...newSong.genres[1]]})}></input>
                <br></br>
                <p>Genre 2</p>
                <input placeholder="Genre 2..." onChange={event => setNewSong({"genres": [...newSong.genres[0], event.target.value]})}></input>
                <input type="submit"></input>
            </form>
        </div>
        
    </>)
}