import "./Song.css"

export default function Song({song, songIndex, setCurentSong, setSrcChange, setPlaying, button, buttonName}) {

    return(<>
        <div className="song">
            <button id="btn" onClick={() => {
                        setPlaying(true);
                        setCurentSong(songIndex);
                        setSrcChange(true);
                    }}>{<span class="material-symbols-outlined">play_arrow</span>}
            </button>
            <div>
                <h1>{song.title}</h1>
                <p style={{color: "grey"}}>{song.artist}</p>
            </div>
            <div>
                {song.genres.map(genre => <p>{genre}</p>)}
            </div>
            <div class="dropdown">
                <div class="dropdown-menu">{buttonName}</div>
                <div class="dropdown-content">
                    {button}
                </div>
            </div>
        </div>
    </>)
}