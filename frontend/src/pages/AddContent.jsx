import { useState } from "react";
import "./AddContent.css";
import NoteEditor from "../components/content/NoteEditor";
function AddContent() {

    const [selectedContent, setSelectedContent] = useState(null);

    const [notes, setNotes] = useState([]);

    const [noteTitle, setNoteTitle] = useState("");

    const [noteText, setNoteText] = useState("");

    const [noteStyle, setNoteStyle] = useState("cute");

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
    const addNote = () => {
        if (!noteTitle.trim()) {
            alert("Please enter a title for your note.");
            return;
        }

        if (!noteText.trim()) {
            alert("Please write something in your note.");
            return;
        }

        const newNote = {
            id: Date.now(),
            type: "note",
            title: noteTitle,
            text: noteText,
            style: noteStyle
        };

        setNotes((previousNotes) => [
            ...previousNotes,
            newNote
        ]);

        setNoteTitle("");
        setNoteText("");
        setNoteStyle("cute");

        setSelectedContent(null);
    };

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

                    {selectedContent === "note" && (
                        <NoteEditor
                            title={noteTitle}
                            text={noteText}
                            style={noteStyle}
                            onTitleChange={setNoteTitle}
                            onTextChange={setNoteText}
                            onStyleChange={setNoteStyle}
                            onAdd={addNote}
                            onCancel={() => setSelectedContent(null)}
                        />
                    )}
                    <div className="content-type-grid">

                        {contentTypes.map((content) => (

                            <button
                                key={content.id}
                                type="button"
                                className={`content-type-card ${selectedContent === content.id
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
{notes.length > 0 && (
  <div className="added-notes">

    <h2>Your Notes</h2>

    <div className="notes-list">

      {notes.map((note) => (
        <div
          key={note.id}
          className={`note-card ${note.style}`}
        >

          <div className="note-card-top">
            <span>📝</span>

            <button
              type="button"
              onClick={() => {
                setNotes((previousNotes) =>
                  previousNotes.filter(
                    (item) => item.id !== note.id
                  )
                );
              }}
            >
              Remove
            </button>
          </div>

          <h3>{note.title}</h3>

          <p>{note.text}</p>

        </div>
      ))}

    </div>

  </div>
)}

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