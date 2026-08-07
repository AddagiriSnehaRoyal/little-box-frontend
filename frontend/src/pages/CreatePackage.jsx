import "./CreatePackage.css";

function CreatePackage() {
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
                                type="text"
                                placeholder="  Enter your name"
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
                                type="text"
                                placeholder="  Who is this little box for?"
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
                                type="text"
                                placeholder="Example: A little piece of us"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="packageMessage">
                                Short Message
                            </label>

                            <textarea
                                id="packageMessage"
                                rows="4"
                                placeholder="Write a small introduction to this box..."
                            ></textarea>
                        </div>

                    </div>

                    <div className="form-group">

  <label>
    Choose a Theme
  </label>

  <div className="theme-options">

    <button type="button" className="theme-option selected">
      🌸
      <span>Blush</span>
    </button>

    <button type="button" className="theme-option">
      🌙
      <span>Midnight</span>
    </button>

    <button type="button" className="theme-option">
      🌿
      <span>Garden</span>
    </button>

    <button type="button" className="theme-option">
      ☁️
      <span>Cloud</span>
    </button>

  </div>

</div>

<div className="form-actions">

  <button
    type="button"
    className="primary-button"
  >
    Continue to Add Content →
  </button>

</div>

                </div>

            </div>
        </main>
    );
}

export default CreatePackage;