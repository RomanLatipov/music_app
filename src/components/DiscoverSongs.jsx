import Song from "./Song";
import List from "./List";
import { useState, useEffect } from "react";

export default function DiscoverSongs({songs, setCurentSong, setSrcChange, setPlaying}) {
    const [playlists, setPlaylists] = useState([]);
    const [value, setValue] = useState("");
    const [arrayOfSongs, setArrayOfSongs] = useState(songs);

    useEffect(() => {
        fetch("http://localhost:3000/playlists")
        .then(res => res.json())
        .then(data => setPlaylists(data))
    }, []);
    
    useEffect(() => {
        fetch("http://localhost:3000/songs")
        .then(res => res.json())
        .then(data => setArrayOfSongs(data))
    }, [])


    function handlePostToPlaylist(id, index){
        fetch("http://localhost:3000/playlists/"+id)
        .then(res => res.json())
        .then(data => fetch("http://localhost:3000/playlists/"+id, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                            songs: [...data.songs, index]
                        })
                    }))
    }

    function handleSearch(name) {
        const search = songs.filter(s => s.title.toLowerCase().includes(name.toLowerCase()));
        setArrayOfSongs(search);
    }

    const displaySongs = arrayOfSongs.map(song => <Song song={song} songIndex={songs.indexOf(song)} setCurentSong={setCurentSong} setSrcChange={setSrcChange} setPlaying={setPlaying} 
    button={playlists.map(list => <List id={list.id} name={list.name} handlePostToPlaylist={handlePostToPlaylist} index={songs.indexOf(song)}/>)}/>)
    return(<>
        <input type="test" placeholder="Search..." value={value} onChange={event => {
            handleSearch(event.target.value);
            setValue(event.target.value);
        }}></input>
        <button onClick={() => {
            setPlaying(true);
            setSrcChange(true);
            setCurentSong(0);
        }}>Play</button>
        {displaySongs}
    </>)
}