import { NavLink } from "react-router-dom";
export default function PlaylistBlock({name, setToggle, array, setPlaylistName, setPlaylistArray, playlistId, setPlaylistId, handleDelete}) {
    
    return(<>
        <p onClick={() => {
            setToggle(false)
            setPlaylistName(name);
            setPlaylistArray(array);
            setPlaylistId(playlistId);
        }}>{name}</p>
        <button onClick={() => handleDelete(playlistId)}>Delete</button>
    </>)
}