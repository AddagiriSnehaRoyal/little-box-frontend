import { useNavigate } from "react-router-dom";

import "./Home.css";

import { Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="home">

      {/* =========================================
          FLOATING DECORATIONS
      ========================================= */}

      <div className="floating-decoration decoration-heart">♡</div>
      <div className="floating-decoration decoration-flower">✿</div>
      <div className="floating-decoration decoration-sparkle">✦</div>
      <div className="floating-decoration decoration-butterfly">🦋</div>


      {/* =========================================
          HERO
      ========================================= */}

      <section className="hero">

        <div className="hero-content">

          <div className="hero-small-badge">
            ✨ A tiny place for big feelings
          </div>

          <p className="hero-tagline">
            Something tiny, made with you in mind ♡
          </p>

          <h1>
            A little box
            <span>of Love</span>
          </h1>

          <p className="hero-description">
            Create a tiny digital package filled with
            notes, photos, songs, memories and little
            surprises for someone special.
          </p>

          <p className="hero-description secondary-description">
            Some feelings are too precious to be left unsaid.
            So here's a little box filled with tiny pieces of
            the heart — sweet words, warm memories, little
            surprises, and moments meant just for you. 💌
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={() => navigate("/create")}
            >
              ✨ Create My Box
            </button>

            <button
              className="secondary-button"
              onClick={() => navigate("/open")}
            >
              📦 Open a Box
            </button>

          </div>

          <div className="hero-note">
            <span>♡</span>
            Made for memories that deserve a little place to stay.
          </div>

        </div>


{/* =========================================
    HERO MEMORY GARDEN
========================================= */}

<div className="memory-garden">

  {/* Soft background glow */}
  <div className="memory-glow"></div>

  {/* Floating memories */}

  <div className="floating-memory memory-camera">
    <span>📷</span>
    <small>memories</small>
  </div>

  <div className="floating-memory memory-note-card">
    <span>💌</span>
    <small>a little note</small>
  </div>

  <div className="floating-memory memory-music-card">
    <span>🎵</span>
    {/* <small>our song</small> */}
  </div>

  <div className="floating-memory memory-flower-card">
    <span>🌸</span>
  </div>

  <div className="floating-memory memory-gift-card">
    <span>🎁</span>
  </div>

  <div className="floating-memory memory-location-card">
    <span>📍</span>
  </div>

  <div className="floating-memory memory-heart-card">
    <span>♡</span>
  </div>

  <div className="floating-memory memory-sparkle-one">
    ✦
  </div>

  <div className="floating-memory memory-sparkle-two">
    ✧
  </div>

  <div className="floating-memory memory-sparkle-three">
    ✦
  </div>


  {/* Main memory card */}

  <div className="memory-center">

    <div className="memory-card">

      <div className="memory-card-top">

        <span className="memory-card-label">
          A little something
        </span>

        <span className="memory-card-heart">
          ♡
        </span>

      </div>


      <div className="memory-card-content">

        <div className="memory-big-heart">
          ♡
        </div>

        <p className="memory-card-title">
          made with
          <span>a little heart</span>
        </p>

        <div className="memory-card-line">
          <span></span>
          <b>✦</b>
          <span></span>
        </div>

        <p className="memory-card-message">
          tiny things,
          <br />
          meaningful memories.
        </p>

      </div>


      <div className="memory-card-footer">
        <span>for someone special</span>
        <span>♡</span>
      </div>

    </div>


    {/* Glow underneath card */}

    <div className="memory-pedestal"></div>

  </div>


  {/* Bottom caption */}

  <div className="memory-caption">

    <span className="memory-caption-line"></span>

    <span>something special, just for you</span>

    <span className="memory-caption-heart">♡</span>

    <span className="memory-caption-line"></span>

  </div>

</div>

      </section>


      {/* =========================================
          LITTLE INTRO
      ========================================= */}

      <section className="intro-section">

        <div className="intro-flower">🌷</div>

        <p className="section-eyebrow">
          A little reminder
        </p>

        <h2>
          The smallest things can
          <span>hold the biggest feelings.</span>
        </h2>

        <p>
          A message you never got to say.
          A picture you never want to forget.
          A song that always reminds you of someone.
        </p>

      </section>


      {/* =========================================
          HOW IT WORKS
      ========================================= */}

      <section className="how-section">

        <div className="section-heading">

          <p>It's simple ♡</p>

          <h2>
            How it works
          </h2>

          <span>
            Three little steps to make something meaningful.
          </span>

        </div>


        <div className="steps">

          <div className="step-card">

            <div className="step-number">
              01
            </div>

            <div className="step-icon">
              ✏️
            </div>

            <h3>Create</h3>

            <p>
              Start your own little digital package
              and give it a name.
            </p>

          </div>


          <div className="step-card">

            <div className="step-number">
              02
            </div>

            <div className="step-icon">
              💌
            </div>

            <h3>Fill</h3>

            <p>
              Add notes, photos, songs, videos,
              drawings and tiny surprises.
            </p>

          </div>


          <div className="step-card">

            <div className="step-number">
              03
            </div>

            <div className="step-icon">
              🎀
            </div>

            <h3>Share</h3>

            <p>
              Get a special link and send your
              little box to someone special.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          CONTENT TYPES
      ========================================= */}

      <section className="content-section">

        <div className="section-heading">

          <p>Make it yours ✨</p>

          <h2>
            Fill your box with little things
          </h2>

          <span>
            Every little piece can tell a different part
            of your story.
          </span>

        </div>


        <div className="content-grid">

          <div className="content-card">
            <span className="content-icon">📝</span>
            <h3>Note</h3>
            <p>Write something from your heart.</p>
            <small>say it softly</small>
          </div>


          <div className="content-card">
            <span className="content-icon">📷</span>
            <h3>Photo</h3>
            <p>Keep a beautiful memory inside.</p>
            <small>keep the moment</small>
          </div>


          <div className="content-card">
            <span className="content-icon">🎥</span>
            <h3>Video</h3>
            <p>Add a moment worth watching again.</p>
            <small>relive it</small>
          </div>


          <div className="content-card">
            <span className="content-icon">🎙️</span>
            <h3>Voice</h3>
            <p>Leave a little piece of your voice.</p>
            <small>hear me say it</small>
          </div>


          <div className="content-card">
            <span className="content-icon">📍</span>
            <h3>Location</h3>
            <p>Share a place that means something.</p>
            <small>somewhere special</small>
          </div>


          <div className="content-card">
            <span className="content-icon">🎵</span>
            <h3>Song</h3>
            <p>Add a song that reminds you of them.</p>
            <small>press play</small>
          </div>


          <div className="content-card">
            <span className="content-icon">🎁</span>
            <h3>Gift</h3>
            <p>Leave a tiny surprise behind.</p>
            <small>just for you</small>
          </div>


          <div className="content-card">
            <span className="content-icon">🎨</span>
            <h3>Drawing</h3>
            <p>Create something only you could make.</p>
            <small>made by hand</small>
          </div>

        </div>

      </section>


      {/* =========================================
          QUOTE
      ========================================= */}

      <section className="quote-section">

        <div className="quote-decoration">
          ❝
        </div>

        <p>
          You don't need a reason to make
          something beautiful for someone.
        </p>

        <span>
          — just a little feeling is enough ♡
        </span>

      </section>


      {/* =========================================
          FINAL CTA
      ========================================= */}

      <section className="cta-section">

        <div className="cta-decoration cta-left">
          🌷
        </div>

        <div className="cta-decoration cta-right">
          ✨
        </div>

        <p className="section-eyebrow">
          One little box. So many feelings.
        </p>

        <h2>
          Ready to make a little
          <span>something special?</span>
        </h2>

        <p>
          Sometimes the smallest things
          mean the most.
        </p>

        <button
          className="primary-button cta-button"
          onClick={() => navigate("/create")}
        >
          💌 Create My Box
        </button>

        <div className="cta-footer">
          made with a little bit of heart ♡
        </div>

      </section>

    </main>
  );
}

export default Home;