import { useState } from "react";
import "./SongPicker.css";

function SongPicker({ onAddSong }) {

    const [songTitle, setSongTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [songUrl, setSongUrl] = useState("");


    const handleAddSong = () => {

        if (!songTitle.trim()) {
            alert("Please enter the song title.");
            return;
        }

        if (!songUrl.trim()) {
            alert("Please paste the song link.");
            return;
        }


        const newSong = {
            id: Date.now(),
            type: "song",
            title: songTitle,
            artist: artist,
            songUrl: songUrl
        };


        onAddSong(newSong);


        setSongTitle("");
        setArtist("");
        setSongUrl("");
    };


    return (

        <div className="song-picker">

            <h3>Add a song that reminds you of them 🎵</h3>

            <p className="song-description">
                Some songs carry memories better than words.
            </p>


            <div className="song-form">

                <label htmlFor="songTitle">
                    Song Title
                </label>

                <input
                    id="songTitle"
                    type="text"
                    placeholder="Example: Until I Found You"
                    value={songTitle}
                    onChange={(event) =>
                        setSongTitle(event.target.value)
                    }
                />


                <label htmlFor="artist">
                    Artist
                </label>

                <input
                    id="artist"
                    type="text"
                    placeholder="Example: Stephen Sanchez"
                    value={artist}
                    onChange={(event) =>
                        setArtist(event.target.value)
                    }
                />


                <label htmlFor="songUrl">
                    Song Link
                </label>

                <input
                    id="songUrl"
                    type="url"
                    placeholder="Paste Spotify or YouTube link"
                    value={songUrl}
                    onChange={(event) =>
                        setSongUrl(event.target.value)
                    }
                />


                <button
                    type="button"
                    onClick={handleAddSong}
                >
                    Add Song ♡
                </button>

            </div>

        </div>

    );
}

export default SongPicker;