import "./Discover.css";
import "../index.css";
import Navbar from "./Navbar";
import AudioPlayer from "./AudioPlayer";
import PlaylistsDisplay from "./PlaylistDisplay";
import DiscoverSongs from "./DiscoverSongs";
import { useEffect, useState } from "react";


export default function Discover() {
    const [songs, setSongs] = useState([]);
    const [currentSong, setCurentSong] = useState(0);
    const [srcChange, setSrcChange] = useState(false);
    const [isPlaying, setPlaying] = useState(false);
    const [playlistArray, setPlaylistArray] = useState([]);
    const [mostRecent, setMostRecent] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/songs")
        .then(res => res.json())
        .then(data => {
            setSongs(data);
            const temp = [];
            for (let i=0; i<data.length; i++)
                temp.push(i);
            setPlaylistArray(temp);
        })
    }, [])

    return(<>
        <div id="sidebar">
            <p>SideBar</p>
            <PlaylistsDisplay />
        </div>
        <div id="main">
            <Navbar />
            <DiscoverSongs songs={songs} setCurentSong={setCurentSong} setSrcChange={setSrcChange} setPlaying={setPlaying}/>
        </div>
        <div id="footer">
            <AudioPlayer musicArray={songs} srcChange={srcChange} setSrcChange={setSrcChange} isPlaying={isPlaying} setPlaying={setPlaying} currentSong={currentSong} setIndex={setCurentSong} playlistArray={playlistArray} mostRecent={mostRecent} setMostRecent={setMostRecent}/>
        </div>
    </>)
}