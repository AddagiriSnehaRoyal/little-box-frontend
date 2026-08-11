import { useState } from "react";
import "./VideoUploader.css";

function VideoUploader({ onAddVideo }) {

    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");

    const handleFileChange = (event) => {

        const file = event.target.files[0];

        if (!file) {
            return;
        }

        setSelectedFile(file);

        const preview =
            URL.createObjectURL(file);

        setPreviewUrl(preview);
    };


    const handleAddVideo = () => {

        if (!selectedFile) {

            alert(
                "Please choose a video first."
            );

            return;
        }


        const newVideo = {

            id: Date.now(),

            type: "video",

            title: selectedFile.name,

            file: selectedFile

        };


        onAddVideo(newVideo);


        setSelectedFile(null);

        setPreviewUrl("");

    };


    return (

        <div className="video-uploader">

            <h3>
                Add a little video 🎥
            </h3>

            <p className="video-description">
                Add a small moment you'd like to keep.
            </p>


            <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
            />


            {previewUrl && (

                <div className="video-preview">

                    <video
                        src={previewUrl}
                        controls
                    />

                </div>

            )}


            <button
                type="button"
                onClick={handleAddVideo}
            >
                Add Video ♡
            </button>

        </div>

    );

}

export default VideoUploader;