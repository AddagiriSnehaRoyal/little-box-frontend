import { useState } from "react";
import "./PhotoUploader.css";

function PhotoUploader({ onAddPhoto }) {

    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [uploading, setUploading] = useState(false);


    const handleFileChange = (event) => {

        const file = event.target.files[0];

        if (!file) {
            return;
        }

        setSelectedFile(file);

        const preview = URL.createObjectURL(file);

        setPreviewUrl(preview);
    };


    const handleAddPhoto = () => {

    if (!selectedFile) {

        alert(
            "Please choose a photo first."
        );

        return;
    }


    const newPhoto = {

        id: Date.now(),

        type: "photo",

        title: selectedFile.name,

        file: selectedFile

    };


    onAddPhoto(newPhoto);


    setSelectedFile(null);

    setPreviewUrl("");
};


    return (

        <div className="photo-uploader">

            <h3>
                Add a little memory 📷
            </h3>

            <p className="photo-description">
                Choose a photo that holds a special memory.
            </p>


            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                disabled={uploading}
            />


            {previewUrl && (

                <div className="photo-preview">

                    <img
                        src={previewUrl}
                        alt="Selected preview"
                    />

                </div>

            )}


            <button
                type="button"
                onClick={handleAddPhoto}
                disabled={uploading}
            >

                {uploading
                    ? "Uploading... ☁️"
                    : "Add Photo ♡"
                }

            </button>

        </div>

    );
}

export default PhotoUploader;