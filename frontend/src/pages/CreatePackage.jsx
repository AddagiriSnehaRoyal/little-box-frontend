import { usePackage } from "../context/PackageContext";
import { useNavigate } from "react-router-dom";
import "./CreatePackage.css";

function CreatePackage() {
    const { packageData, setPackageData } = usePackage();
    const navigate = useNavigate();
    console.log("PACKAGE DATA:", packageData);
    const handleChange = (event) => {
        const { name, value } = event.target;

        setPackageData((previousData) => ({
            ...previousData,
            [name]: value
        }));
    };

    const validatePackage = () => {
        if (!packageData.fromName.trim()) {
            alert("Please enter your name.");
            return false;
        }

        if (!packageData.toName.trim()) {
            alert("Please enter the recipient's name.");
            return false;
        }

        if (!packageData.title.trim()) {
            alert("Please give your little box a title.");
            return false;
        }

        return true;
    };

    const handleContinue = () => {
        const isValid = validatePackage();

        if (!isValid) {
            return;
        }

        navigate("/create/content");
    };
    return (
        <main className={`create-package theme-${packageData.theme}`}>

            <div className="theme-decorations" aria-hidden="true">
                <div className="blush-decorations">
                    <span className="blush-flower flower-one">🌸</span>
                    <span className="blush-flower flower-two">🌷</span>
                    <span className="blush-flower flower-three">🌸</span>
                    

                    <span className="blush-heart heart-one">♡</span>
                    <span className="blush-heart heart-two">♥</span>
                    <span className="blush-heart heart-three">♥</span>
                    


                    <span className="blush-sparkle sparkle-one">✦</span>
                    <span className="blush-sparkle sparkle-two">✧</span>

                    <span className="blush-petal petal-one">❀</span>
                    <span className="blush-petal petal-two">❀</span>
                </div>

                <div className="midnight-decorations">

                    <span className="midnight-moon">🌙</span>

                    <span className="night-star night-star-1">✦</span>
                    <span className="night-star night-star-2">✧</span>
                    <span className="night-star night-star-3">✦</span>
                    <span className="night-star night-star-4">✧</span>
                    <span className="night-star night-star-5">·</span>
                    <span className="night-star night-star-6">✦</span>
                    <span className="night-star night-star-7">✧</span>

                    <span className="shooting-star">☄</span>

                    <span className="night-cloud night-cloud-1">☁</span>
                    <span className="night-cloud night-cloud-2">☁</span>

                </div>

                <div className="garden-decorations">

                    {/* Left vines */}
                    <span className="garden-vine vine-left-top">🌿</span>
                    <span className="garden-vine vine-left-middle">🌱</span>
                    <span className="garden-vine vine-left-bottom">🍃</span>

                    {/* Right vines */}
                    <span className="garden-vine vine-right-top">🌿</span>
                    <span className="garden-vine vine-right-middle">🍀</span>
                    <span className="garden-vine vine-right-bottom">🍃</span>

                    {/* Different leaves */}
                    <span className="garden-leaf leaf-large">🍃</span>
                    <span className="garden-leaf leaf-small">🌱</span>
                    <span className="garden-leaf leaf-round">🍀</span>
                    <span className="garden-leaf leaf-sprout">🌿</span>
                    <span className="garden-leaf leaf-four">☘️</span>
                    <span className="garden-leaf leaf-five">🌱</span>

                    {/* Flowers */}
                    <span className="garden-flower flower-daisy">🌼</span>
                    <span className="garden-flower flower-tulip">🌷</span>
                    <span className="garden-flower flower-blossom">🌺</span>

                    {/* Tiny garden details */}
                    <span className="garden-detail detail-one">✿</span>
                    <span className="garden-detail detail-two">❀</span>
                    <span className="garden-detail detail-three">✽</span>

                    {/* Butterfly */}
                    <span className="garden-butterfly">🦋</span>



                </div>

                <div className="cloud-decorations">

                    {/* Sun */}
                    <span className="sky-sun">☀️</span>

                    {/* Clouds */}
                    <span className="sky-cloud cloud-large cloud-one">☁️</span>
                    <span className="sky-cloud cloud-medium cloud-two">☁️</span>
                    <span className="sky-cloud cloud-small cloud-three">☁️</span>
                    <span className="sky-cloud cloud-large cloud-four">☁️</span>
                    <span className="sky-cloud cloud-small cloud-five">☁️</span>

                    {/* Rainbow */}
                    <span className="sky-rainbow">🌈</span>

                    {/* Birds */}
                    <span className="sky-bird bird-one">⌁</span>
                    <span className="sky-bird bird-two">⌁</span>

                    {/* Sparkles */}
                    <span className="sky-sparkle sparkle-cloud-one">✦</span>
                    <span className="sky-sparkle sparkle-cloud-two">✧</span>

                    {/* Floating bubbles */}
                    <span className="sky-bubble bubble-cloud-one">○</span>
                    <span className="sky-bubble bubble-cloud-two">○</span>
                    <span className="sky-bubble bubble-cloud-three">○</span>

                </div>


            </div>
            <div className="create-container">

                <div className="create-heading">
                    <p>Let's make something special ♡</p>

                    <h1>Create your little box</h1>

                    <span>
                        Start with the people and the little details
                        that make this package yours.
                    </span>
                </div>

                <div className="package-form">

                    <h2>Package Details</h2>

                    <p className="form-description">
                        Tell us a little about this box.
                    </p>


                                        <div className="form-group">

                        <label>
                            Choose a Theme
                        </label>

                        <div className="theme-options">

                            <button
                                type="button"
                                className={`theme-option ${packageData.theme === "blush" ? "selected" : ""
                                    }`}
                                onClick={() =>
                                    setPackageData((previousData) => ({
                                        ...previousData,
                                        theme: "blush"
                                    }))
                                }
                            >
                                🌸
                                <span>Blush</span>
                            </button>

                            <button
                                type="button"
                                className={`theme-option ${packageData.theme === "midnight" ? "selected" : ""
                                    }`}
                                onClick={() =>
                                    setPackageData((previousData) => ({
                                        ...previousData,
                                        theme: "midnight"
                                    }))
                                }
                            >
                                🌙
                                <span>Midnight</span>
                            </button>

                            <button
                                type="button"
                                className={`theme-option ${packageData.theme === "garden" ? "selected" : ""
                                    }`}
                                onClick={() =>
                                    setPackageData((previousData) => ({
                                        ...previousData,
                                        theme: "garden"
                                    }))
                                }
                            >
                                🌿
                                <span>Garden</span>
                            </button>

                            <button
                                type="button"
                                className={`theme-option ${packageData.theme === "cloud" ? "selected" : ""
                                    }`}
                                onClick={() =>
                                    setPackageData((previousData) => ({
                                        ...previousData,
                                        theme: "cloud"
                                    }))
                                }
                            >
                                ☁️
                                <span>Cloud</span>
                            </button>

                        </div>


                    </div>

                    <div className="form-section">

                        <h3>From 💌</h3>

                        <div className="form-group">
                            <label htmlFor="fromName">
                                Your Name :
                            </label>

                            <input
                                id="fromName"
                                name="fromName"
                                type="text"
                                placeholder="Enter your name"
                                value={packageData.fromName}
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    <div className="form-section">

                        <h3>To 🌷</h3>

                        <div className="form-group">
                            <label htmlFor="toName">
                                Their Name :
                            </label>

                            <input
                                id="toName"
                                name="toName"
                                type="text"
                                placeholder="Who is this little box for?"
                                value={packageData.toName}
                                onChange={handleChange}
                            />
                        </div>

                    </div>

                    <div className="form-section">

                        <h3>About the Box 📦</h3>

                        <div className="form-group">
                            <label htmlFor="packageTitle">
                                Package Title
                            </label>

                            <input
                                id="packageTitle"
                                name="title"
                                type="text"
                                placeholder="Example: A little piece of us"
                                value={packageData.title}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="packageMessage">
                                Short Message
                            </label>

                            <textarea
                                id="packageMessage"
                                name="message"
                                rows="4"
                                placeholder="Write a small introduction to this box..."
                                value={packageData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                    </div>



                    <div className="form-actions">

                        <button
                            type="button"
                            className="primary-button"
                            onClick={handleContinue}
                        >
                            Continue to Add Content →
                        </button>

                    </div>

                    {/* <pre>
                        {JSON.stringify(packageData, null, 2)}
                    </pre> */}

                </div>


            </div>

        </main>
    );
}

export default CreatePackage;