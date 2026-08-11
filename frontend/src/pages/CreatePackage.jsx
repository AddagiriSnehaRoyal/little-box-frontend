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
        <main className="create-package">
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

                    <div className="form-actions">

                        <button
                            type="button"
                            className="primary-button"
                            onClick={handleContinue}
                        >
                            Continue to Add Content →
                        </button>

                    </div>

                    <pre>
                        {JSON.stringify(packageData, null, 2)}
                    </pre>

                </div>


            </div>

        </main>
    );
}

export default CreatePackage;