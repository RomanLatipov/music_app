import "./Home.css";
import "../index.css";
import Navbar from "./Navbar";
import AudioPlayer from "./AudioPlayer";
import PlaylistsDisplay from "./PlaylistDisplay";
import Main from "./Main";
import Playlist from "./Playlist";
import { useState, useEffect } from "react";

export default function Home() {
    const [songs, setSongs] = useState([]);
    const [currentSong, setCurentSong] = useState();
    const [srcChange, setSrcChange] = useState(false);
    const [isPlaying, setPlaying] = useState(false);
    const [toggle, setToggle] = useState(true);
    const [playlistId, setPlaylistId] = useState("");
    const [playlistName, setPlaylistName] = useState("");
    const [playlistArray, setPlaylistArray] = useState([]);
    const [mostRecent, setMostRecent] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/songs")
        .then(res => res.json())
        .then(data => setSongs(data))
    }, [])

    return(<>
        <div id="sidebar">
            <button onClick={() => setToggle(true)}>Main</button>
            <PlaylistsDisplay setToggle={setToggle} setPlaylistName={setPlaylistName} setPlaylistArray={setPlaylistArray} setPlaylistId={setPlaylistId}/>
        </div>
        <div id="main">
            <Navbar />
            {toggle 
                ? 
                <Main songs={songs} mostRecent={mostRecent} setMostRecent={setMostRecent}/> 
                : 
                <Playlist playlistId={playlistId} playlistName={playlistName} playlistArray={playlistArray} setPlaylistArray={setPlaylistArray} 
                    songs={songs} setCurentSong={setCurentSong} setSrcChange={setSrcChange} setPlaying={setPlaying} mostRecent={mostRecent} setMostRecent={setMostRecent}/>
            }
        </div>
        <div id="footer">
            <AudioPlayer musicArray={songs} srcChange={srcChange} setSrcChange={setSrcChange} isPlaying={isPlaying} setPlaying={setPlaying} currentSong={currentSong} setIndex={setCurentSong} playlistArray={playlistArray} mostRecent={mostRecent} setMostRecent={setMostRecent}/>
        </div>
    </>)
}