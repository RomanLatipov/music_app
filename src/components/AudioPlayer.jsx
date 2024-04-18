import "./AudioPlayer.css"
import { useState } from "react";
export default function AudioPlayer({musicArray, srcChange, setSrcChange, isPlaying, setPlaying, currentSong, setIndex, playlistArray, mostRecent, setMostRecent}) {
    const index = playlistArray.indexOf(currentSong);
    if (srcChange === true) {
        loadSong(index);
        setSrcChange(false);
    }
    const [currentTime, setCurrentTime] = useState("0:00");
    const [endTime, setEndTime] = useState("0:00");
    const [slider, setSlider] = useState(0);
    const [volume, setVolume] = useState(50);
    const [volumeIcon, setVolumeIcon] = useState(`volume_down`);
    const [volumeMuted, setVolumeMuted] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [name, setName] = useState("");
    const [imgSrc, setImgSrc] = useState("");

    function playSong() {
        if (isPlaying === false) {
            audio.play();
            setPlaying(true);
        }
        else {
            audio.pause();
            setPlaying(false);
        }
    }
    function switchTrack() {
        if (isPlaying === true) {
            audio.play();
        }
    }
    function loadSong(songId) {
        audio.src = `/songs/${musicArray[playlistArray[songId]].title}.mp3`;
	    audio.load();
        setMostRecent([playlistArray[songId], ...mostRecent]);
        switchTrack();
    }
    function prevSong(songId) {
        setSlider(0);
        if (songId < 0) {
            songId = playlistArray.length-1
        }
        setIndex(playlistArray[songId]);
        loadSong(songId);
        switchTrack();
    }
    function nextSong(songId) {
        setSlider(0);
        if (shuffle) {
            songId = Math.floor(Math.random() * playlistArray.length);
        }
        else {
            if(songId > playlistArray.length-1) {
                songId = 0;
            }
        }
        setIndex(playlistArray[songId]);
        loadSong(songId);
        switchTrack();
    }
    function setTime(output, input) {
        const minutes = Math.floor(input / 60);
        const seconds = Math.floor(input % 60);
        (seconds < 10) ? output(minutes + ":0" + seconds) : output(minutes + ":" + seconds);
    }
    function timeupdate() {
        const currentAudioTime = Math.floor(audio.currentTime);
        setTime(setCurrentTime, currentAudioTime);
        let time = audio.currentTime / audio.duration * 100;
        setSlider((isNaN(time)) ? 0 : time);
    }
    function customSlider(value) {
        setSlider(value);
        const val = (value / audio.duration) * 100 + "%";
        setTime(setCurrentTime, value);
        audio.currentTime = audio.duration * (value / 100);
    }
    function customVolumeSlider(value) {
        audio.volume = value/100;
        (value > 50) ? setVolumeIcon(`volume_up`) : (value == 0) ? setVolumeIcon(`volume_off`) : setVolumeIcon(`volume_down`);            
    }

    return(<>
        <audio id="audio" onLoadedData={() => {
                setTime(setEndTime, audio.duration)
                setName(musicArray[playlistArray[index]].title);
                setImgSrc(`/images/${musicArray[playlistArray[index]]["album_cover"]}`)
            }} onEnded={() => nextSong(index+1)} onTimeUpdate={() => timeupdate()}>
            <source src={""}></source> 
        </audio>
        <div id="songInfo">
        <img src={imgSrc}></img>
            <p>{name}</p>
        </div>
    	<div className="player">
            <button id="btn" onClick={() => prevSong(index-1)}>
                <span className="material-symbols-outlined">
                    fast_rewind
                </span>
            </button>
            <button id="btn" onClick={() => {
                setPlaying((isPlaying) => !isPlaying);
                playSong();
            }}>
                <span className="material-symbols-outlined">
                    {(!isPlaying) ? `play_arrow` : `pause` }
                </span>
            </button>
            <button id="btn" onClick={() => nextSong(index+1)}>
                <span className="material-symbols-outlined">
                    fast_forward
                </span>
            </button>
            <small className="time">{currentTime}</small>
            <div>
                <input type="range" min="0" max="100" value={slider} className="slider" id="myRange" onInput={event => customSlider(event.target.value)}></input>
            </div>
            <small>{endTime}</small>
            <button id="btn" onClick={() => setShuffle(!shuffle)}>
                <span className="material-symbols-outlined">
                    shuffle
                </span>
            </button>
        </div>
        <div className="volume">
            <button id="btn" className="volume-icon" onClick={() => {
                setVolumeMuted(!volumeMuted);
                volumeMuted ? customVolumeSlider(volume) : customVolumeSlider(0);
            }}>
                <span className="material-symbols-outlined">
                    {volumeIcon}
                </span>
            </button>
            <div>
                <input type="range" min="0" max="100" value={volumeMuted ? 0 : volume} onInput={event => {
                    customVolumeSlider(event.target.value);
                    setVolume(event.target.value);
                }}></input>
            </div>
        </div>
    
    </>)
}