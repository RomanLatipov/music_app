import "./Main.css"
import MainDisplaySongs from "./MainDisplaySongs";

export default function Main({songs, mostRecent}) {
    return(<>
        <h1 style={{background: "#222", color: "white", padding: "0.5rem"}}>These Are The Most Recent Songs You've Listend To</h1>
        <br></br>
        <div id="mostrecent">
            {mostRecent.map(index => <MainDisplaySongs song={songs[index]}/>)}
        </div>
    </>)
}