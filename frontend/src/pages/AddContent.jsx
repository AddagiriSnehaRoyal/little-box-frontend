import { useState } from "react";
import "./AddContent.css";

function AddContent() {

  const [selectedContent, setSelectedContent] = useState(null);

  const contentTypes = [
    {
      id: "note",
      icon: "📝",
      title: "Note",
      description: "Write something from your heart."
    },
    {
      id: "photo",
      icon: "📷",
      title: "Photo",
      description: "Keep a beautiful memory."
    },
    {
      id: "video",
      icon: "🎥",
      title: "Video",
      description: "Add a special moment."
    },
    {
      id: "voice",
      icon: "🎙",
      title: "Voice",
      description: "Leave a little piece of your voice."
    },
    {
      id: "location",
      icon: "📍",
      title: "Location",
      description: "Share a meaningful place."
    },
    {
      id: "song",
      icon: "🎵",
      title: "Song",
      description: "Add a song that reminds you of them."
    },
    {
      id: "gift",
      icon: "🎁",
      title: "Gift",
      description: "Leave a tiny surprise."
    },
    {
      id: "drawing",
      icon: "🎨",
      title: "Drawing",
      description: "Create something yourself."
    }
  ];

  return (
    <main className="add-content">

      <div className="add-content-container">

        <div className="content-heading">

          <p>Now comes the fun part ♡</p>

          <h1>Fill your little box</h1>

          <span>
            Add the tiny things that make this package
            feel personal and special.
          </span>

        </div>


        <div className="content-panel">

          <h2>What would you like to add?</h2>

          <p className="content-subtitle">
            You can add as many little things as you want.
          </p>


          <div className="content-type-grid">

            {contentTypes.map((content) => (

              <button
                key={content.id}
                type="button"
                className={`content-type-card ${
                  selectedContent === content.id
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSelectedContent(content.id)
                }
              >

                <span className="content-icon">
                  {content.icon}
                </span>

                <h3>
                  {content.title}
                </h3>

                <p>
                  {content.description}
                </p>

              </button>

            ))}

          </div>


          <div className="content-actions">

            <button
              type="button"
              className="primary-button"
            >
              Continue to Preview →
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}

export default AddContent;