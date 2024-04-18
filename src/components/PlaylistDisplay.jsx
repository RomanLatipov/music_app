import "./PlaylistDisplay.css"
import PlaylistBlock from "./PlaylistBlock"
import { useEffect, useState } from "react"

export default function PlaylistDisplay({setToggle, setPlaylistName, setPlaylistArray, setPlaylistId}) {
    const [playlists, setPlaylists] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/playlists")
        .then(res => res.json())
        .then(data => setPlaylists(data))
    }, [])
    
    function handlePost(playlistName) {
        fetch("http://localhost:3000/playlists", {
            method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: playlistName,
                    songs: []
                })
        })
        .then(res => res.json())
        .then(data => setPlaylists([...playlists, data]))
    }

    function handleDelete(id) {
        fetch("http://localhost:3000/playlists/"+id, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            const temp = playlists.filter(p => (p.id !== data.id));
            setPlaylists(temp);
        })
    }

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    return(<>
        <br></br>
        <div id="mySidenav" class="sidenav">
            <div class="closebtn" style={{color: "white"}}onClick={() => closeNav()}>x</div>
            <form onSubmit={() => {handlePost(name)}}>
                <input placeholder="Playlist name..." value={name} onChange={event => setName(event.target.value)}></input>
                <br></br>
                <input type="submit"></input>
            </form>
        </div>
        <br></br>
        <span style={{font: "30px", cursor: "pointer", background: "#222"}} onClick={openNav}>Create Playlist</span>
        {playlists.map(playlist => <PlaylistBlock name={playlist.name} setToggle={setToggle} array={playlist.songs} setPlaylistName={setPlaylistName} 
            setPlaylistArray={setPlaylistArray} playlistId={playlist.id} setPlaylistId={setPlaylistId} handleDelete={handleDelete}/>)}
    </>)
}