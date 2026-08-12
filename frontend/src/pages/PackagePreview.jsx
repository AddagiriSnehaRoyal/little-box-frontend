import { useEffect, useState } from "react";
import {
    useNavigate,
    useParams,
    useLocation
} from "react-router-dom";

import { usePackage } from "../context/PackageContext";
import "./PackagePreview.css";

function PackagePreview() {

    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const {
        packageData,
        setPackageData
    } = usePackage();

    console.log("SELECTED THEME:", packageData?.theme);

    const [loading, setLoading] = useState(true);
    const [packageFound, setPackageFound] = useState(false);

    const [saved, setSaved] = useState(false);
    const [savedPackageId, setSavedPackageId] = useState("");
    const [copied, setCopied] = useState(false);


    /*
    ==========================================
    LOAD PACKAGE
    ==========================================
    */

    useEffect(() => {

        console.log("Current package ID:", id);

        // --------------------------------
        // PREVIEW MODE
        // /package/preview
        // --------------------------------

        if (!id || id === "preview") {

            console.log(
                "Preview mode - using current packageData"
            );

            setPackageFound(true);
            setLoading(false);

            return;
        }


        // --------------------------------
        // SAVED PACKAGE MODE
        // /package/:id
        // --------------------------------

        const loadPackage = async () => {

            setLoading(true);
            setPackageFound(false);

            try {

                const response = await fetch(
                    `https://little-box-backend.onrender.com/api/packages/${id}`
                );


                const data = await response.json();


                console.log(
                    "GET package response:",
                    data
                );


                if (
                    response.ok &&
                    data.success &&
                    data.package
                ) {

                    setPackageData(
                        data.package
                    );

                    setPackageFound(true);

                } else {

                    console.error(
                        "Package not found:",
                        data
                    );

                    setPackageFound(false);

                }


            } catch (error) {

                console.error(
                    "Unable to load package:",
                    error
                );

                setPackageFound(false);

            } finally {

                setLoading(false);

            }

        };


        loadPackage();

    }, [id, setPackageData]);


    /*
    ==========================================
    SAVE PACKAGE
    ==========================================
    */

    const handleSavePackage = async () => {

        const packageId = Date.now().toString();

        try {

            const response = await fetch(
                "https://little-box-backend.onrender.com/api/packages",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({

                        packageId,

                        fromName: packageData.fromName,

                        toName: packageData.toName,

                        title: packageData.title,

                        message: packageData.message,

                        theme: packageData.theme,

                        contents: packageData.contents

                    })

                }
            );


            const data = await response.json();


            console.log(
                "SAVE PACKAGE RESPONSE:",
                data
            );


            if (
                !response.ok ||
                !data.success
            ) {

                throw new Error(
                    data.message ||
                    "Unable to save package"
                );

            }


            const savedId =
                data.package.packageId;


            setSavedPackageId(
                savedId
            );

            setSaved(true);


            console.log(
                "Saved package ID:",
                savedId
            );


        } catch (error) {

            console.error(
                "Save package error:",
                error
            );

            alert(
                "Unable to save your little box."
            );

        }

    };


    /*
    ==========================================
    COPY LINK
    ==========================================
    */

    const handleCopyLink = async () => {

        const packageLink =
            `${window.location.origin}/package/${savedPackageId}`;


        try {

            await navigator.clipboard.writeText(
                packageLink
            );


            setCopied(true);


            setTimeout(() => {

                setCopied(false);

            }, 2000);


        } catch (error) {

            console.error(
                "Unable to copy link:",
                error
            );

        }

    };


    /*
    ==========================================
    LOADING
    ==========================================
    */

    if (loading) {

        return (

            <main className="package-preview">

                <div className="preview-message">

                    <div className="preview-message-icon">
                        🎁
                    </div>

                    <h1>
                        Opening your little box...
                    </h1>

                    <p>
                        Just a tiny moment ♡
                    </p>

                </div>

            </main>

        );

    }


    /*
    ==========================================
    PACKAGE NOT FOUND
    ==========================================
    */

    if (!packageFound) {

        return (

            <main className="package-preview">

                <div className="preview-message">

                    <div className="preview-message-icon">
                        🥺
                    </div>

                    <h1>
                        This little box couldn't be found.
                    </h1>

                    <p>
                        The package may have been removed
                        or the link may be incorrect.
                    </p>

                    <button
                        type="button"
                        className="preview-back-button"
                        onClick={() => navigate("/")}
                    >
                        Go Home ♡
                    </button>

                </div>

            </main>

        );

    }


    /*
    ==========================================
    SAVED SUCCESS SCREEN
    ==========================================
    */

    if (saved) {

        const packageLink =
            `${window.location.origin}/package/${savedPackageId}`;


        return (

            <main className="package-preview">

                <div className="saved-package">

                    <div className="saved-icon">
                        🎁
                    </div>


                    <p className="saved-small-text">
                        A tiny surprise, ready to be shared ♡
                    </p>


                    <h1>
                        Your little box is ready!
                    </h1>


                    <p className="saved-description">
                        Everything inside has been packed
                        with a little thought and a lot of heart.
                    </p>


                    <div className="package-link-box">

                        <span>
                            🔗 Your Box Link
                        </span>

                        <p>
                            {packageLink}
                        </p>

                    </div>


                    <div className="saved-actions">

                        <button
                            type="button"
                            className="copy-link-button"
                            onClick={handleCopyLink}
                        >
                            {copied
                                ? "✓ Link Copied!"
                                : "Copy Link ♡"
                            }
                        </button>


                        <button
                            type="button"
                            className="open-box-button"
                            onClick={() => {
                                window.location.href =
                                    `/package/${savedPackageId}`;
                            }}
                        >
                            Open My Box →
                        </button>


                        <button
                            type="button"
                            className="home-button"
                            onClick={() =>
                                navigate("/")
                            }
                        >
                            Back Home
                        </button>

                    </div>

                </div>

            </main>

        );

    }


    /*
    ==========================================
    NORMAL PACKAGE PREVIEW
    ==========================================
    */

    return (

        <main
            className={`package-preview theme-${packageData.theme}`}
        >

            <div className="preview-container">


                {/* HEADING */}

                <div className="preview-heading">

                    <p>
                        A little glimpse of what's inside ♡
                    </p>

                    <h1>
                        Your Little Box
                    </h1>

                    <span>
                        This is how your little box will look.
                    </span>

                </div>


                {/* MAIN BOX */}

                <div className="preview-box">


                    {/* FROM / TO */}

                    <div className="preview-names">

                        <div>

                            <span>
                                From 💌
                            </span>

                            <strong>
                                {packageData.fromName ||
                                    "Someone special"}
                            </strong>

                        </div>


                        <div className="preview-heart">
                            ♡
                        </div>


                        <div>

                            <span>
                                To 🌷
                            </span>

                            <strong>
                                {packageData.toName ||
                                    "Someone special"}
                            </strong>

                        </div>

                    </div>


                    {/* TITLE */}

                    <div className="preview-title">

                        <span>
                            A Little Box of Love
                        </span>

                        <h2>
                            {packageData.title ||
                                "A little piece of us"}
                        </h2>


                        {packageData.message && (

                            <p>
                                {packageData.message}
                            </p>

                        )}

                    </div>


                    {/* CONTENTS */}

                    {packageData.contents &&
                        packageData.contents.length > 0 ? (

                        <div className="preview-contents">

                            {packageData.contents.map(
                                (content) => (

                                    <div
                                        className="preview-content-card"
                                        key={content.id}
                                    >


                                        {/* NOTE */}

                                        {content.type === "note" && (
                                            <div
                                                className={`note-preview note-${content.style || "simple"} theme-${packageData.theme || "blush"}`}
                                            >

                                                <div className="note-decoration">
                                                    {content.style === "cute"
                                                        ? "🌸"
                                                        : content.style === "letter"
                                                            ? "💌"
                                                            : "🤍"}
                                                </div>

                                                <div className="note-icon">
                                                    💌
                                                </div>

                                                <h3>
                                                    {content.title}
                                                </h3>

                                                <p>
                                                    {content.text}
                                                </p>

                                                {content.style === "letter" && (
                                                    <div className="note-signature">
                                                        With a little thought ♡
                                                    </div>
                                                )}

                                            </div>
                                        )}


                                        {/* PHOTO */}

                                        {content.type === "photo" && (

                                            <>

                                                <div className="preview-content-icon">
                                                    📷
                                                </div>

                                                <h3>
                                                    {content.title}
                                                </h3>

                                                <img
                                                    src={content.imageUrl}
                                                    alt={content.title}
                                                    className="preview-photo"
                                                />

                                            </>

                                        )}


                                        {/* DRAWING */}

                                        {content.type === "drawing" && (

                                            <>

                                                <div className="preview-content-icon">
                                                    🎨
                                                </div>

                                                <h3>
                                                    {content.title ||
                                                        "A Little Drawing"}
                                                </h3>

                                                <img
                                                    src={content.imageUrl}
                                                    alt={
                                                        content.title ||
                                                        "My Drawing"
                                                    }
                                                    className="preview-drawing"
                                                />

                                            </>

                                        )}


                                        {/* VIDEO */}

                                        {content.type === "video" && (

                                            <>

                                                <div className="preview-content-icon">
                                                    🎥
                                                </div>

                                                <h3>
                                                    {content.title}
                                                </h3>

                                                <video
                                                    src={content.videoUrl}
                                                    controls
                                                    className="preview-video"
                                                />

                                            </>

                                        )}


                                        {/* VOICE */}

                                        {content.type === "voice" && (

                                            <>

                                                <div className="preview-content-icon">
                                                    🎙️
                                                </div>

                                                <h3>
                                                    {content.title}
                                                </h3>

                                                <p style={{ fontSize: "12px", wordBreak: "break-all" }}>
                                                    {content.audioUrl}
                                                </p>

                                                <audio
                                                    src={content.audioUrl}
                                                    controls
                                                    preload="metadata"
                                                    className="preview-audio"
                                                />

                                            </>

                                        )}


                                        {/* LOCATION */}

                                        {content.type === "location" && (

                                            <>

                                                <div className="preview-content-icon">
                                                    📍
                                                </div>

                                                <h3>
                                                    {content.title}
                                                </h3>

                                                <p>
                                                    {content.address}
                                                </p>

                                                {content.locationUrl && (

                                                    <a
                                                        href={
                                                            content.locationUrl
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="preview-link"
                                                    >
                                                        Open Location 📍
                                                    </a>

                                                )}

                                            </>

                                        )}


                                        {/* SONG */}

                                        {content.type === "song" && (

                                            <>

                                                <div className="preview-content-icon">
                                                    🎵
                                                </div>

                                                <h3>
                                                    {content.title}
                                                </h3>

                                                {content.artist && (

                                                    <p>
                                                        {content.artist}
                                                    </p>

                                                )}

                                                {content.songUrl && (

                                                    <a
                                                        href={
                                                            content.songUrl
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="preview-link"
                                                    >
                                                        Open Song 🎵
                                                    </a>

                                                )}

                                            </>

                                        )}


                                        {/* GIFT */}

                                        {content.type === "gift" && (

                                            <>

                                                <div className="preview-content-icon">
                                                    🎁
                                                </div>

                                                <h3>
                                                    {content.title}
                                                </h3>

                                                <p>
                                                    {content.message}
                                                </p>

                                                {content.giftUrl && (

                                                    <a
                                                        href={
                                                            content.giftUrl
                                                        }
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="preview-link"
                                                    >
                                                        Open Gift 🎁
                                                    </a>

                                                )}

                                            </>

                                        )}

                                    </div>

                                )
                            )}

                        </div>

                    ) : (

                        <div className="empty-preview">

                            <span>
                                ♡
                            </span>

                            <p>
                                Your little box is waiting
                                for some memories.
                            </p>

                        </div>

                    )}


                    {/* FOOTER */}

                    <div className="preview-footer">

                        <p>
                            Made with a little thought,
                            just for you. ♡
                        </p>

                    </div>


                    {/* ACTIONS */}

                    <div className="preview-actions">

                        <button
                            type="button"
                            className="preview-back-button"
                            onClick={() =>
                                navigate("/create/content")
                            }
                        >
                            ← Back to Add Content
                        </button>


                        <button
                            type="button"
                            className="preview-continue-button"
                            onClick={handleSavePackage}
                        >
                            Save My Little Box ♡
                        </button>

                    </div>

                </div>

            </div>

        </main>

    );

}

export default PackagePreview;