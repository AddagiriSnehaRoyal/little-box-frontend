import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./AddContent.css";

import NoteEditor from "../components/content/NoteEditor";
import PhotoUploader from "../components/content/PhotoUploader";
import VideoUploader from "../components/content/VideoUploader";
import VoiceRecorder from "../components/content/VoiceRecorder";
import LocationPicker from "../components/content/LocationPicker";
import SongPicker from "../components/content/SongPicker";
import GiftPicker from "../components/content/GiftPicker";
import DrawingUploader from "../components/content/DrawingUploader";

import { usePackage } from "../context/PackageContext";


function AddContent() {

    const navigate = useNavigate();

    const {
        packageData,
        setPackageData
    } = usePackage();


    const [selectedContent, setSelectedContent] =
        useState(null);


    const [noteTitle, setNoteTitle] =
        useState("");

    const [noteText, setNoteText] =
        useState("");

    const [noteStyle, setNoteStyle] =
        useState("cute");


    // --------------------------------
    // CONTENT TYPES
    // --------------------------------

    const contentTypes = [

        {
            id: "note",
            icon: "📝",
            title: "Note",
            description:
                "Write something from your heart."
        },

        {
            id: "photo",
            icon: "📷",
            title: "Photo",
            description:
                "Keep a beautiful memory."
        },

        {
            id: "video",
            icon: "🎥",
            title: "Video",
            description:
                "Add a special moment."
        },

        {
            id: "voice",
            icon: "🎙️",
            title: "Voice",
            description:
                "Leave a little piece of your voice."
        },

        {
            id: "location",
            icon: "📍",
            title: "Location",
            description:
                "Share a meaningful place."
        },

        {
            id: "song",
            icon: "🎵",
            title: "Song",
            description:
                "Add a song that reminds you of them."
        },

        {
            id: "gift",
            icon: "🎁",
            title: "Gift",
            description:
                "Leave a tiny surprise."
        },

        {
            id: "drawing",
            icon: "🎨",
            title: "Drawing",
            description:
                "Create something yourself."
        }

    ];


    // --------------------------------
    // CLOUDINARY UPLOAD
    // --------------------------------

    const uploadToCloudinary = async (file) => {

        if (!file) {

            throw new Error(
                "No file selected."
            );

        }


        const formData =
            new FormData();


        formData.append(
            "file",
            file
        );


        const response =
            await fetch(
                "https://little-box-backend.onrender.com/api/upload",
                {
                    method: "POST",
                    body: formData
                }
            );


        const data =
            await response.json();


        console.log(
            "Cloudinary upload response:",
            data
        );


        if (
            !response.ok ||
            !data.success
        ) {

            throw new Error(
                data.message ||
                "Cloudinary upload failed."
            );

        }


        return data.url;

    };


    // --------------------------------
    // ADD NOTE
    // --------------------------------

    const addNote = () => {

        if (!noteTitle.trim()) {

            alert(
                "Please enter a title for your note."
            );

            return;
        }


        if (!noteText.trim()) {

            alert(
                "Please write something in your note."
            );

            return;
        }


        const newNote = {

            id: Date.now(),

            type: "note",

            title: noteTitle,

            text: noteText,

            style: noteStyle

        };


        setPackageData(
            (previousData) => ({

                ...previousData,

                contents: [

                    ...previousData.contents,

                    newNote

                ]

            })
        );


        setNoteTitle("");

        setNoteText("");

        setNoteStyle("cute");

        setSelectedContent(null);

    };


    // --------------------------------
    // NOTES
    // --------------------------------

    const notes =
        packageData.contents.filter(
            (content) =>
                content.type === "note"
        );


    // --------------------------------
    // ADD PHOTO
    // --------------------------------

    const addPhoto = async (
        newPhoto
    ) => {

        try {

            console.log(
                "Uploading photo..."
            );


            const cloudinaryUrl =
                await uploadToCloudinary(
                    newPhoto.file
                );


            const photoForPackage = {

                id: newPhoto.id,

                type: "photo",

                title: newPhoto.title,

                imageUrl:
                    cloudinaryUrl

            };


            setPackageData(
                (previousData) => ({

                    ...previousData,

                    contents: [

                        ...previousData.contents,

                        photoForPackage

                    ]

                })
            );


            setSelectedContent(null);


            console.log(
                "Photo uploaded successfully."
            );


        } catch (error) {

            console.error(
                "Unable to upload photo:",
                error
            );


            alert(
                "Unable to upload the photo. Please try again."
            );

        }

    };


    // --------------------------------
    // ADD VIDEO
    // --------------------------------

const addVideo = async (newVideo) => {

    try {

        console.log("Uploading video...");

        const cloudinaryUrl =
            await uploadToCloudinary(
                newVideo.file
            );

        const videoForPackage = {

            id: newVideo.id,

            type: "video",

            title: newVideo.title,

            videoUrl: cloudinaryUrl

        };

        setPackageData(
            (previousData) => ({

                ...previousData,

                contents: [

                    ...previousData.contents,

                    videoForPackage

                ]

            })
        );

        setSelectedContent(null);

        console.log(
            "Video uploaded successfully:",
            cloudinaryUrl
        );

    } catch (error) {

        console.error(
            "Unable to upload video:",
            error
        );

        alert(
            "Unable to upload the video. Please try again."
        );

    }

};


    // --------------------------------
    // ADD VOICE
    // --------------------------------

const addVoice = async (newVoice) => {

    try {

        console.log("Uploading voice...");


        // Upload voice file to Cloudinary
        const cloudinaryUrl =
            await uploadToCloudinary(
                newVoice.file
            );


        console.log(
            "Voice uploaded successfully:",
            cloudinaryUrl
        );


        // Create voice object with permanent URL
        const voiceForPackage = {

            id: newVoice.id,

            type: "voice",

            title: newVoice.title,

            audioUrl: cloudinaryUrl

        };


        // Add voice to package
        setPackageData(
            (previousData) => ({

                ...previousData,

                contents: [

                    ...previousData.contents,

                    voiceForPackage

                ]

            })
        );


        setSelectedContent(null);


    } catch (error) {

        console.error(
            "Unable to upload voice:",
            error
        );

        alert(
            "Unable to upload the voice message. Please try again."
        );

    }

};


    // --------------------------------
    // ADD LOCATION
    // --------------------------------

const addLocation = (newLocation) => {

    setPackageData((previousData) => ({

        ...previousData,

        contents: [
            ...previousData.contents,
            newLocation
        ]

    }));

    setSelectedContent(null);

};


    // --------------------------------
    // ADD SONG
    // --------------------------------

    const addSong = (
        newSong
    ) => {

        setPackageData(
            (previousData) => ({

                ...previousData,

                contents: [

                    ...previousData.contents,

                    newSong

                ]

            })
        );


        setSelectedContent(null);

    };


    // --------------------------------
    // ADD GIFT
    // --------------------------------

const addGift = (newGift) => {

    setPackageData((previousData) => ({

        ...previousData,

        contents: [
            ...previousData.contents,
            newGift
        ]

    }));

    setSelectedContent(null);

};


    // --------------------------------
    // ADD DRAWING
    // --------------------------------

    const addDrawing = async (
        newDrawing
    ) => {

        try {

            console.log(
                "Uploading drawing..."
            );


            const cloudinaryUrl =
                await uploadToCloudinary(
                    newDrawing.file
                );


            const drawingForPackage = {

                id: newDrawing.id,

                type: "drawing",

                title:
                    newDrawing.title ||
                    "My Drawing",

                imageUrl:
                    cloudinaryUrl

            };


            setPackageData(
                (previousData) => ({

                    ...previousData,

                    contents: [

                        ...previousData.contents,

                        drawingForPackage

                    ]

                })
            );


            setSelectedContent(null);


            console.log(
                "Drawing uploaded successfully:",
                cloudinaryUrl
            );


        } catch (error) {

            console.error(
                "Unable to upload drawing:",
                error
            );


            alert(
                "Unable to upload the drawing. Please try again."
            );

        }

    };


    // --------------------------------
    // FILTER CONTENT
    // --------------------------------

    const photos =
        packageData.contents.filter(
            (content) =>
                content.type === "photo"
        );


    const videos =
        packageData.contents.filter(
            (content) =>
                content.type === "video"
        );


    const voices =
        packageData.contents.filter(
            (content) =>
                content.type === "voice"
        );


    const locations =
        packageData.contents.filter(
            (content) =>
                content.type === "location"
        );


    const songs =
        packageData.contents.filter(
            (content) =>
                content.type === "song"
        );


    const gifts =
        packageData.contents.filter(
            (content) =>
                content.type === "gift"
        );


    const drawings =
        packageData.contents.filter(
            (content) =>
                content.type === "drawing"
        );


    // --------------------------------
    // REMOVE CONTENT
    // --------------------------------

    const removeContent = (
        contentId
    ) => {

        setPackageData(
            (previousData) => ({

                ...previousData,

                contents:
                    previousData.contents.filter(
                        (content) =>
                            content.id !== contentId
                    )

            })
        );

    };


    // --------------------------------
    // RETURN / UI
    // --------------------------------

    return (

        <main className="add-content">

            <div className="add-content-container">


                {/* HEADING */}

                <div className="content-heading">

                    <p>
                        Now comes the fun part ♡
                    </p>

                    <h1>
                        Fill your little box
                    </h1>

                    <span>
                        Add the tiny things that make this
                        package feel personal and special.
                    </span>

                </div>


                {/* CONTENT PANEL */}

                <div className="content-panel">

                    <h2>
                        What would you like to add?
                    </h2>

                    <p className="content-subtitle">
                        You can add as many little things
                        as you want.
                    </p>


                    {/* NOTE EDITOR */}

                    {selectedContent === "note" && (

                        <NoteEditor
                            title={noteTitle}
                            text={noteText}
                            style={noteStyle}

                            onTitleChange={
                                setNoteTitle
                            }

                            onTextChange={
                                setNoteText
                            }

                            onStyleChange={
                                setNoteStyle
                            }

                            onAdd={addNote}

                            onCancel={() =>
                                setSelectedContent(null)
                            }
                        />

                    )}


                    {/* PHOTO */}

                    {selectedContent === "photo" && (

                        <PhotoUploader
                            onAddPhoto={addPhoto}
                        />

                    )}


                    {/* VIDEO */}

                    {selectedContent === "video" && (

                        <VideoUploader
                            onAddVideo={addVideo}
                        />

                    )}


                    {/* VOICE */}

                    {selectedContent === "voice" && (

                        <VoiceRecorder
                            onAddVoice={addVoice}
                        />

                    )}


                    {/* LOCATION */}

                    {selectedContent === "location" && (

                        <LocationPicker
                            onAddLocation={
                                addLocation
                            }
                        />

                    )}


                    {/* SONG */}

                    {selectedContent === "song" && (

                        <SongPicker
                            onAddSong={
                                addSong
                            }
                        />

                    )}


                    {/* GIFT */}

                    {selectedContent === "gift" && (

                        <GiftPicker
                            onAddGift={
                                addGift
                            }
                        />

                    )}


                    {/* DRAWING */}

                    {selectedContent === "drawing" && (

                        <DrawingUploader
                            onAddDrawing={
                                addDrawing
                            }
                        />

                    )}


                    {/* CONTENT TYPE GRID */}

                    <div className="content-type-grid">

                        {contentTypes.map(
                            (content) => (

                                <button
                                    key={content.id}
                                    type="button"

                                    className={`content-type-card ${
                                        selectedContent ===
                                        content.id
                                            ? "selected"
                                            : ""
                                    }`}

                                    onClick={() =>
                                        setSelectedContent(
                                            content.id
                                        )
                                    }
                                >

                                    <span className="content-icon">
                                        {content.icon}
                                    </span>

                                    <h3>
                                        {content.title}
                                    </h3>

                                    <p>
                                        {content.description}
                                    </p>

                                </button>

                            )
                        )}

                    </div>


                    {/* ADDED PHOTOS */}

                    {photos.length > 0 && (

                        <div className="added-photos">

                            <h2>
                                Your Photos 📷
                            </h2>

                            <div className="photos-list">

                                {photos.map(
                                    (photo) => (

                                        <div
                                            className="photo-card"
                                            key={photo.id}
                                        >

                                            <img
                                                src={
                                                    photo.imageUrl
                                                }
                                                alt={
                                                    photo.title
                                                }
                                            />

                                            <p>
                                                {photo.title}
                                            </p>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeContent(
                                                        photo.id
                                                    )
                                                }
                                            >
                                                Remove Photo
                                            </button>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>

                    )}


                    {/* ADDED VIDEOS */}

                    {videos.length > 0 && (

                        <div className="added-videos">

                            <h2>
                                Your Videos 🎥
                            </h2>

                            <div className="videos-list">

                                {videos.map(
                                    (video) => (

                                        <div
                                            className="video-card"
                                            key={video.id}
                                        >

                                            <video
                                                src={
                                                    video.videoUrl
                                                }
                                                controls
                                            />

                                            <p>
                                                {video.title}
                                            </p>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeContent(
                                                        video.id
                                                    )
                                                }
                                            >
                                                Remove Video
                                            </button>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>

                    )}


                    {/* ADDED VOICE */}

                    {voices.length > 0 && (

                        <div className="added-voices">

                            <h2>
                                Your Voice Messages 🎙️
                            </h2>

                            <div className="voices-list">

                                {voices.map(
                                    (voice) => (

                                        <div
                                            className="voice-card"
                                            key={voice.id}
                                        >

                                            <div className="voice-icon">
                                                🎙️
                                            </div>

                                            <p>
                                                {voice.title}
                                            </p>

                                            <audio
                                                src={
                                                    voice.audioUrl
                                                }
                                                controls
                                            />

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeContent(
                                                        voice.id
                                                    )
                                                }
                                            >
                                                Remove Voice
                                            </button>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>

                    )}


                    {/* ADDED LOCATIONS */}

                    {locations.length > 0 && (

                        <div className="added-locations">

                            <h2>
                                Your Places 📍
                            </h2>

                            <div className="locations-list">

                                {locations.map(
                                    (location) => (

                                        <div
                                            className="location-card"
                                            key={location.id}
                                        >

                                            <div className="location-icon">
                                                📍
                                            </div>

                                            <h3>
                                                {location.title}
                                            </h3>

                                            <p>
                                                {location.address}
                                            </p>

                                            <a
                                                href={
                                                    location.locationUrl
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="open-location-button"
                                            >
                                                Open Location 📍
                                            </a>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeContent(
                                                        location.id
                                                    )
                                                }
                                            >
                                                Remove Location
                                            </button>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>

                    )}


                    {/* ADDED SONGS */}

                    {songs.length > 0 && (

                        <div className="added-songs">

                            <h2>
                                Your Songs 🎵
                            </h2>

                            <div className="songs-list">

                                {songs.map(
                                    (song) => (

                                        <div
                                            className="song-card"
                                            key={song.id}
                                        >

                                            <div className="song-icon">
                                                🎵
                                            </div>

                                            <h3>
                                                {song.title}
                                            </h3>

                                            {song.artist && (

                                                <p>
                                                    {song.artist}
                                                </p>

                                            )}

                                            <a
                                                href={
                                                    song.songUrl
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="open-song-button"
                                            >
                                                Open Song 🎵
                                            </a>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeContent(
                                                        song.id
                                                    )
                                                }
                                            >
                                                Remove Song
                                            </button>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>

                    )}


                    {/* ADDED GIFTS */}

                    {gifts.length > 0 && (

                        <div className="added-gifts">

                            <h2>
                                Your Little Gifts 🎁
                            </h2>

                            <div className="gifts-list">

                                {gifts.map(
                                    (gift) => (

                                        <div
                                            className="gift-card"
                                            key={gift.id}
                                        >

                                            <div className="gift-icon">
                                                🎁
                                            </div>

                                            <h3>
                                                {gift.title}
                                            </h3>

                                            <p>
                                                {gift.message}
                                            </p>


                                            {gift.giftUrl && (

                                                <a
                                                    href={
                                                        gift.giftUrl
                                                    }
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="open-gift-button"
                                                >
                                                    Open Gift 🎁
                                                </a>

                                            )}


                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeContent(
                                                        gift.id
                                                    )
                                                }
                                            >
                                                Remove Gift
                                            </button>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>

                    )}


                    {/* ADDED DRAWINGS */}

                    {drawings.length > 0 && (

                        <div className="added-drawings">

                            <h2>
                                Your Drawings 🎨
                            </h2>

                            <div className="drawings-list">

                                {drawings.map(
                                    (drawing) => (

                                        <div
                                            className="drawing-card"
                                            key={drawing.id}
                                        >

                                            <img
                                                src={
                                                    drawing.imageUrl
                                                }
                                                alt={
                                                    drawing.title
                                                }
                                            />

                                            <p>
                                                {drawing.title}
                                            </p>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeContent(
                                                        drawing.id
                                                    )
                                                }
                                            >
                                                Remove Drawing
                                            </button>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>

                    )}


                    {/* ADDED NOTES */}

                    {notes.length > 0 && (

                        <div className="added-notes">

                            <h2>
                                Your Notes
                            </h2>

                            <div className="notes-list">

                                {notes.map(
                                    (note) => (

                                        <div
                                            key={note.id}
                                            className={`note-card ${note.style}`}
                                        >

                                            <div className="note-card-top">

                                                <span>
                                                    📝
                                                </span>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        removeContent(
                                                            note.id
                                                        )
                                                    }
                                                >
                                                    Remove
                                                </button>

                                            </div>

                                            <h3>
                                                {note.title}
                                            </h3>

                                            <p>
                                                {note.text}
                                            </p>

                                        </div>

                                    )
                                )}

                            </div>

                        </div>

                    )}


                    {/* CONTINUE BUTTON */}

                    <div className="content-actions">

                        <button
                            type="button"
                            className="primary-button"
                            onClick={() =>
                                navigate(
                                    "/package/preview"
                                )
                            }
                        >
                            Preview Your Box →
                        </button>

                    </div>


                    {/* DEBUG DATA */}

                    <pre className="debug-data">
                        {JSON.stringify(
                            packageData,
                            null,
                            2
                        )}
                    </pre>


                </div>

            </div>

        </main>

    );

}

export default AddContent;