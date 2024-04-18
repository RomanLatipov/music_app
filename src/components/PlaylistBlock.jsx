import "./PlaylistBlock.css"
export default function PlaylistBlock({name, setToggle, array, setPlaylistName, setPlaylistArray, playlistId, setPlaylistId, handleDelete}) {
    return(<>
        <div id="block" onClick={event => {
            setToggle(false)
            setPlaylistName(name);
            setPlaylistArray(array);
            setPlaylistId(playlistId);
            event.stopPropagation();
        }}>
            <div>{name}</div>
            <button id="btn" onClick={event => {
                handleDelete(playlistId);
                event.stopPropagation();
            }}>-</button>
        </div>
        
    </>)
}