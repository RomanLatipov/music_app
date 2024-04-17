export default function MainDisplaySongs({song}) {
    return(<>
        <div id="card">
            <h1>{song.title}</h1>
            <p>{song.artist}</p>
        </div>
    </>)
}