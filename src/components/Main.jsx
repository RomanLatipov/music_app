import "./Main.css"
import MainDisplaySongs from "./MainDisplaySongs";

export default function Main({songs, mostRecent, setMostRecent}) {
    return(<>
        <div id="mostrecent">
            {mostRecent.map(index => <MainDisplaySongs song={songs[index]}/>)}
        </div>
    </>)
}