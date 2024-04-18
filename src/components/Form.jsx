import "./Form.css";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Form() {
    const [genre1, setGenre1] = useState("");
    const [genre2, setGenre2] = useState("");
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("")
    const [cover, setCover] = useState("");

    function handlePost() {
        fetch("http://localhost:3000/songs", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "title": title,
                "artist": artist,
                "genres": [
                    genre1,
                    genre2
                ],
                "album_cover": cover
            })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        
    }

    return(<>
        <div id="body">
            <Navbar />  
            <form onSubmit={() => {handlePost()}}>
                <p>Ttitle</p>
                <input placeholder="Song title..." value={title} onChange={event => setTitle(event.target.value)}></input>
                <br></br>
                <p>Artist</p>
                <input placeholder="Artist name..." value={artist} onChange={event => setArtist(event.target.value)}></input>
                <br></br>
                <p>Genre 1</p>
                <input placeholder="Genre 1..." value={genre1} onChange={event => setGenre1(event.target.value)}></input>
                <br></br>
                <p>Genre 2</p>
                <input placeholder="Genre 2..." value={genre2} onChange={event => setGenre2(event.target.value)}></input>
                <p>Album cover</p>
                <input placeholder="Album cover..." value={cover} onChange={event => setCover(event.target.value)}></input>
                <input type="submit"></input>
            </form>
        </div>
        
    </>)
}