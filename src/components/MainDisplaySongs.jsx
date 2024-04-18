import "./MainDisplaySongs.css"
export default function MainDisplaySongs({song}) {
    console.log(song["album_cover"])
    return(<>
        <div id="main-card">
            <img src={`/images/${song["album_cover"]}`}></img>
            <h1>{song.title}</h1>
            <p>{song.artist}</p>
        </div>
    </>)
}