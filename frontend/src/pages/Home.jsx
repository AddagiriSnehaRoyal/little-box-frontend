import "./Home.css";

function Home() {
  return (
    <main className="home">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">

          <p className="hero-tagline">
            Something tiny, made with you in mind ♡
          </p>

          <h1>
            A little box of Love
          </h1>

          <p className="hero-description">
            Create a tiny digital package filled with
            notes, photos, songs, memories and little
            surprises for someone special.
          </p>

          <div className="hero-buttons">
            <button className="primary-button">
              ✨ Create My Box
            </button>

            <button className="secondary-button">
              📦 Open a Box
            </button>
          </div>

        </div>

        <div className="hero-box">
          <div className="gift-box">
            <span>♡</span>
          </div>
        </div>

      </section>


      {/* How It Works */}
      <section className="how-section">

        <div className="section-heading">
          <p>It's simple</p>
          <h2>How it works</h2>
        </div>

        <div className="steps">

          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Create</h3>
            <p>
              Start your own little digital package.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Fill</h3>
            <p>
              Add notes, photos, songs, videos and more.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Share</h3>
            <p>
              Get a special link and send it to someone.
            </p>
          </div>

        </div>

      </section>


      {/* Content Types */}
      <section className="content-section">

        <div className="section-heading">
          <p>Make it yours</p>
          <h2>Fill your box with little things</h2>
        </div>

        <div className="content-grid">

          <div className="content-card">
            <span>📝</span>
            <h3>Note</h3>
            <p>Write something from your heart.</p>
          </div>

          <div className="content-card">
            <span>📷</span>
            <h3>Photo</h3>
            <p>Keep a beautiful memory inside.</p>
          </div>

          <div className="content-card">
            <span>🎥</span>
            <h3>Video</h3>
            <p>Add a moment worth watching again.</p>
          </div>

          <div className="content-card">
            <span>🎙</span>
            <h3>Voice</h3>
            <p>Leave a little piece of your voice.</p>
          </div>

          <div className="content-card">
            <span>📍</span>
            <h3>Location</h3>
            <p>Share a place that means something.</p>
          </div>

          <div className="content-card">
            <span>🎵</span>
            <h3>Song</h3>
            <p>Add a song that reminds you of them.</p>
          </div>

          <div className="content-card">
            <span>🎁</span>
            <h3>Gift</h3>
            <p>Leave a tiny surprise behind.</p>
          </div>

          <div className="content-card">
            <span>🎨</span>
            <h3>Drawing</h3>
            <p>Create something only you could make.</p>
          </div>

        </div>

      </section>


      {/* Final CTA */}
      <section className="cta-section">

        <h2>
          Ready to make a little something special?
        </h2>

        <p>
          Sometimes the smallest things mean the most.
        </p>

        <button className="primary-button">
          💌 Create My Box
        </button>

      </section>

    </main>
  );
}

export default Home;