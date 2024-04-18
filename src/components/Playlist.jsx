import "./Playlist.css"
import Song from "./Song";
import { useState } from "react";
export default function Playlist({playlistId, playlistName, playlistArray, setPlaylistArray, songs, setCurentSong, setSrcChange, setPlaying}) {
    const [value, setValue] = useState("");
    const [search, setSearch] = useState();

    function hanldeDeleteFromPlaylist(id, index) {
        const temp = playlistArray.filter(i => i != index);
        setPlaylistArray(temp);
        fetch("http://localhost:3000/playlists/"+id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                songs: [...temp]
            })
        })
    }

    function handleSearch(name) {
        const search = playlistArray.filter(i => songs[i].title.toLowerCase().includes(name.toLowerCase()));
        setSearch(search.map(index => <Song song={songs[index]} songIndex={index} setCurentSong={setCurentSong} setSrcChange={setSrcChange} setPlaying={setPlaying} button={<button style={{width: "160px"}} onClick={() => {
            hanldeDeleteFromPlaylist(playlistId, index);
        }}>Delete</button>}/>));
    }

    const displaySongs = playlistArray.map(index => <Song song={songs[index]} songIndex={index} setCurentSong={setCurentSong} setSrcChange={setSrcChange} setPlaying={setPlaying}
        button={<button style={{width: "160px"}} onClick={() => {
            hanldeDeleteFromPlaylist(playlistId, index);
        }}>Delete</button>}/>)
    return(<>
        <div className="header">
            {playlistName}
        </div>
        <input type="test" placeholder="Search..." value={value} onChange={event => {
            handleSearch(event.target.value);
            setValue(event.target.value);
        }}></input>
        <button onClick={() => {
            setPlaying(true);
            setSrcChange(true);
            setCurentSong(playlistArray[0]);
        }}>Play</button>
        {(value === "") ? displaySongs : search}
    </>)
}