import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./PackageReveal.css";

function PackageReveal() {

    const { packageId } = useParams();
    const navigate = useNavigate();

    const [packageData, setPackageData] = useState(null);
    const [loading, setLoading] = useState(true);

    const [isOpening, setIsOpening] = useState(false);
    const [isRevealed, setIsRevealed] = useState(false);


    /*
    =========================================
    LOAD PACKAGE FROM BACKEND
    =========================================
    */

    useEffect(() => {

        console.log("Loading package:", packageId);

        const loadPackage = async () => {

            try {

                const response = await fetch(
                    `https://little-box-backend.onrender.com/api/packages/${packageId}`
                );

                const data = await response.json();

                console.log("RECEIVER PACKAGE RESPONSE:", data);


                if (
                    response.ok &&
                    data.success &&
                    data.package
                ) {

                    console.log(
                        "RECEIVER PACKAGE DATA:",
                        data.package
                    );

                    console.log(
                        "RECEIVER CONTENTS:",
                        data.package.contents
                    );

                    setPackageData(data.package);

                } else {

                    console.error(
                        "Package not found:",
                        data
                    );

                    setPackageData(null);

                }

            } catch (error) {

                console.error(
                    "Unable to load package:",
                    error
                );

                setPackageData(null);

            } finally {

                setLoading(false);

            }

        };


        if (packageId) {
            loadPackage();
        }

    }, [packageId]);


    /*
    =========================================
    OPEN BOX
    =========================================
    */

    const handleOpenBox = () => {

        setIsOpening(true);

        setTimeout(() => {

            setIsRevealed(true);

        }, 1800);

    };


    /*
    =========================================
    LOADING
    =========================================
    */

    if (loading) {

        return (

            <main className="reveal-page">

                <div className="reveal-loading">

                    <div className="loading-heart">
                        ♡
                    </div>

                    <h1>
                        Someone left you
                        something special...
                    </h1>

                    <p>
                        Preparing your little box ♡
                    </p>

                </div>

            </main>

        );

    }


    /*
    =========================================
    PACKAGE NOT FOUND
    =========================================
    */

    if (!packageData) {

        return (

            <main className="reveal-page">

                <div className="reveal-not-found">

                    <div className="reveal-not-found-icon">
                        💌
                    </div>

                    <h1>
                        Oh no...
                    </h1>

                    <p>
                        We couldn't find this little box.
                        <br />
                        Maybe the link is incorrect or
                        the box doesn't exist anymore.
                    </p>

                    <button
                        type="button"
                        onClick={() => navigate("/")}
                    >
                        ← Back to Home
                    </button>

                </div>

            </main>

        );

    }


    /*
    =========================================
    MAIN PAGE
    =========================================
    */

    return (

        <main
            className={`
                reveal-page
                theme-${packageData.theme || "blush"}
                ${isRevealed ? "is-revealed" : ""}
            `}
        >


            {/* =========================================
                DECORATIONS
            ========================================= */}

            <div className="reveal-decoration reveal-decoration-one">
                ✦
            </div>

            <div className="reveal-decoration reveal-decoration-two">
                ♡
            </div>

            <div className="reveal-decoration reveal-decoration-three">
                ✿
            </div>

            <div className="reveal-decoration reveal-decoration-four">
                ✧
            </div>


            {/* =========================================
                BEFORE OPENING
            ========================================= */}

            {!isRevealed && (

                <section className="reveal-intro">

                    <p className="reveal-eyebrow">
                        A little surprise is waiting ♡
                    </p>


                    <h1>
                        For {packageData.toName}
                    </h1>


                    <p className="reveal-subtitle">

                        Someone made something special
                        <br />
                        just for you.

                    </p>


                    {/* =========================================
                        GIFT BOX
                    ========================================= */}

                    <div
                        className={`
                            reveal-gift
                            ${isOpening ? "opening" : ""}
                        `}
                    >

                        <div className="gift-glow"></div>


                        <div className="reveal-box">

                            {/* LID */}

                            <div className="reveal-lid">

                                <div className="lid-ribbon"></div>

                                <span>
                                    ♡
                                </span>

                            </div>


                            {/* BODY */}

                            <div className="reveal-body">

                                <div className="body-ribbon"></div>

                                <div className="body-heart">
                                    ♡
                                </div>

                            </div>

                        </div>


                        {/* FLOATING DECORATIONS */}

                        <span className="gift-floating gift-floating-one">
                            ♡
                        </span>

                        <span className="gift-floating gift-floating-two">
                            ✦
                        </span>

                        <span className="gift-floating gift-floating-three">
                            ♡
                        </span>

                        <span className="gift-floating gift-floating-four">
                            ✿
                        </span>

                    </div>


                    <p className="reveal-hint">

                        {isOpening
                            ? "Your little box is opening..."
                            : "Take a little breath..."
                        }

                    </p>


                    <button
                        type="button"
                        className="reveal-open-button"
                        onClick={handleOpenBox}
                        disabled={isOpening}
                    >

                        {isOpening
                            ? "Opening your little box..."
                            : "Open My Box ♡"
                        }

                    </button>

                </section>

            )}


            {/* =========================================
                REVEALED CONTENT
            ========================================= */}

            {isRevealed && (

                <section className="revealed-content">


                    {/* HEADER */}

                    <div className="revealed-header">

                        <p>
                            A little something from
                        </p>

                        <h1>
                            {packageData.fromName}
                        </h1>

                        <span>
                            made especially for you ♡
                        </span>

                    </div>


                    {/* MAIN MESSAGE */}

                    <div className="revealed-message">

                        <span className="message-icon">
                            💌
                        </span>

                        <p className="message-label">
                            A little message
                        </p>

                        <h2>
                            {packageData.title}
                        </h2>


                        {packageData.message && (

                            <p className="message-text">
                                {packageData.message}
                            </p>

                        )}

                    </div>


                    {/* =========================================
                        CONTENTS
                    ========================================= */}

                    {packageData.contents &&
                    packageData.contents.length > 0 ? (

                        <div className="revealed-contents">

                            {packageData.contents.map(
                                (content) => (

                                    <div
                                        className="revealed-content-card"
                                        key={content.id}
                                    >

                                        <div className="content-card-icon">

                                            {getContentIcon(
                                                content.type
                                            )}

                                        </div>


                                        <h3>

                                            {getContentTitle(
                                                content.type
                                            )}

                                        </h3>


                                        {renderContent(
                                            content
                                        )}

                                    </div>

                                )
                            )}

                        </div>

                    ) : (

                        <div className="empty-revealed-content">

                            <span>
                                ♡
                            </span>

                            <p>
                                This little box doesn't
                                have any extra surprises.
                            </p>

                        </div>

                    )}


                    {/* =========================================
                        ENDING
                    ========================================= */}

                    <div className="reveal-ending">

                        <div className="ending-heart">
                            ♡
                        </div>

                        <p>
                            That's everything inside
                            your little box.
                        </p>

                        <span>
                            Made with little things
                            that mean a lot ✨
                        </span>

                    </div>


                    <button
                        type="button"
                        className="reveal-home-button"
                        onClick={() => navigate("/")}
                    >
                        ← Back to Home
                    </button>

                </section>

            )}

        </main>

    );

}


/*
=========================================
CONTENT ICONS
=========================================
*/

function getContentIcon(type) {

    const icons = {

        note: "📝",

        photo: "📷",

        video: "🎥",

        voice: "🎙️",

        location: "📍",

        song: "🎵",

        gift: "🎁",

        drawing: "🎨"

    };

    return icons[type] || "♡";
}


/*
=========================================
CONTENT TITLES
=========================================
*/

function getContentTitle(type) {

    const titles = {

        note: "A Little Note",

        photo: "A Little Memory",

        video: "A Little Moment",

        voice: "A Little Voice",

        location: "A Special Place",

        song: "A Little Song",

        gift: "A Little Surprise",

        drawing: "Something Made For You"

    };

    return titles[type] || "A Little Something";
}


/*
=========================================
RENDER CONTENT
=========================================
*/

function renderContent(content) {

    switch (content.type) {


        /*
        =====================================
        NOTE
        =====================================
        */

        case "note":

            return (

                <div className="reveal-note">

                    {content.title && (

                        <strong>
                            {content.title}
                        </strong>

                    )}

                    <p>
                        {content.text}
                    </p>

                </div>

            );


        /*
        =====================================
        PHOTO
        =====================================
        */

        case "photo":

            return (

                <>

                    {content.title && (

                        <p className="content-subtitle">
                            {content.title}
                        </p>

                    )}

                    {content.imageUrl && (

                        <img
                            src={content.imageUrl}
                            alt={content.title || "A memory"}
                            className="reveal-photo"
                        />

                    )}

                </>

            );


        /*
        =====================================
        DRAWING
        =====================================
        */

        case "drawing":

            return (

                <>

                    {content.title && (

                        <p className="content-subtitle">
                            {content.title}
                        </p>

                    )}

                    {content.imageUrl && (

                        <img
                            src={content.imageUrl}
                            alt={content.title || "A drawing"}
                            className="reveal-drawing"
                        />

                    )}

                </>

            );


        /*
        =====================================
        VIDEO
        =====================================
        */

        case "video":

            return (

                <>

                    {content.title && (

                        <p className="content-subtitle">
                            {content.title}
                        </p>

                    )}

                    {content.videoUrl && (

                        <video
                            controls
                            className="reveal-video"
                            src={content.videoUrl}
                        />

                    )}

                </>

            );


        /*
        =====================================
        VOICE
        =====================================
        */

        case "voice":

            return (

                <>

                    {content.title && (

                        <p className="content-subtitle">
                            {content.title}
                        </p>

                    )}

                    {content.audioUrl && (

                        <audio
                            controls
                            preload="metadata"
                            className="reveal-audio"
                            src={content.audioUrl}
                        />

                    )}

                </>

            );


        /*
        =====================================
        LOCATION
        =====================================
        */

        case "location":

            return (

                <div className="reveal-location">

                    {content.title && (

                        <p className="content-subtitle">
                            {content.title}
                        </p>

                    )}

                    {content.address && (

                        <p>
                            📍 {content.address}
                        </p>

                    )}

                    {content.locationUrl && (

                        <a
                            href={content.locationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reveal-link"
                        >
                            Open Location →
                        </a>

                    )}

                </div>

            );


        /*
        =====================================
        SONG
        =====================================
        */

        case "song":

            return (

                <div className="reveal-song">

                    {content.title && (

                        <p>
                            🎵 {content.title}
                        </p>

                    )}

                    {content.artist && (

                        <p>
                            {content.artist}
                        </p>

                    )}

                    {content.songUrl && (

                        <a
                            href={content.songUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reveal-link"
                        >
                            Listen to the Song →
                        </a>

                    )}

                </div>

            );


        /*
        =====================================
        GIFT
        =====================================
        */

        case "gift":

            return (

                <div className="reveal-gift-content">

                    <div className="mini-gift">
                        🎁
                    </div>

                    {content.title && (

                        <p>
                            {content.title}
                        </p>

                    )}

                    {content.message && (

                        <p>
                            {content.message}
                        </p>

                    )}

                    {content.giftUrl && (

                        <a
                            href={content.giftUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reveal-link"
                        >
                            Open Your Surprise →
                        </a>

                    )}

                </div>

            );


        /*
        =====================================
        DEFAULT
        =====================================
        */

        default:

            return (

                <p>
                    A little something made
                    just for you ♡
                </p>

            );

    }

}


export default PackageReveal;