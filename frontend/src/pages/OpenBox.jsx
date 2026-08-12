import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OpenBox.css";

function OpenBox() {
    const navigate = useNavigate();

    const [boxLink, setBoxLink] = useState("");

    const handleOpenBox = () => {
        const value = boxLink.trim();

        if (!value) {
            alert("Please enter a box link.");
            return;
        }

        /*
         * If the user enters a complete URL,
         * extract the package ID from it.
         */

        try {
            const url = new URL(value);

            const pathParts = url.pathname
                .split("/")
                .filter(Boolean);

            const packageId =
                pathParts[pathParts.length - 1];

            if (packageId) {
                navigate(`/package/${packageId}`);
                return;
            }

        } catch {
            /*
             * Not a complete URL.
             * Treat the entered value as a package ID.
             */
        }

        navigate(`/package/${value}`);
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        handleOpenBox();
    };


    return (
        <main className="open-box-page">

            {/* Decorative elements */}

            <div className="open-decoration decoration-heart">
                ♡
            </div>

            <div className="open-decoration decoration-flower">
                ✿
            </div>

            <div className="open-decoration decoration-sparkle">
                ✦
            </div>

            <div className="open-decoration decoration-star">
                ☆
            </div>


            <div className="open-box-container">

                {/* Heading */}

                <div className="open-box-heading">

                    <p className="open-small-text">
                        A little surprise is waiting ♡
                    </p>

                    <h1>
                        Open a little box
                    </h1>

                    <p>
                        Someone made something special
                        just for you.
                    </p>

                </div>


                {/* Box illustration */}

                <div className="open-box-illustration">

                    <div className="open-box-shadow"></div>

                    <div className="open-gift-box">

                        <div className="gift-lid">

                            <span className="gift-ribbon">
                                ♡
                            </span>

                        </div>

                        <div className="gift-body">

                            <div className="gift-ribbon-vertical"></div>

                            <div className="gift-ribbon-horizontal"></div>

                        </div>

                    </div>

                    <div className="floating-heart heart-one">
                        ♡
                    </div>

                    <div className="floating-heart heart-two">
                        ✦
                    </div>

                    <div className="floating-heart heart-three">
                        ♡
                    </div>

                </div>


                {/* Open card */}

                <div className="open-box-card">

                    <div className="card-icon">
                        💌
                    </div>

                    <h2>
                        Your little box is here
                    </h2>

                    <p>
                        Enter the link or box code that
                        someone shared with you.
                    </p>


                    <form
                        className="open-box-form"
                        onSubmit={handleSubmit}
                    >

                        <label htmlFor="boxLink">
                            Box Link
                        </label>

                        <div className="input-wrapper">

                            <span className="input-icon">
                                🔗
                            </span>

                            <input
                                id="boxLink"
                                type="text"
                                placeholder="Paste your box link here..."
                                value={boxLink}
                                onChange={(event) =>
                                    setBoxLink(
                                        event.target.value
                                    )
                                }
                            />

                        </div>


                        <button
                            type="submit"
                            className="open-button"
                        >
                            <span>📦</span>
                            Open My Box
                            <span>→</span>
                        </button>

                    </form>


                    <div className="open-divider">
                        <span>or</span>
                    </div>


                    <button
                        type="button"
                        className="create-box-link"
                        onClick={() =>
                            navigate("/create")
                        }
                    >
                        Create your own little box ♡
                    </button>

                </div>


                {/* Bottom text */}

                <div className="open-box-footer">

                    <button
                        type="button"
                        onClick={() => navigate("/")}
                    >
                        ← Back to Home
                    </button>

                    <span>
                        Made with little things that mean a lot ✨
                    </span>

                </div>

            </div>

        </main>
    );
}

export default OpenBox;