import "./NoteEditor.css";
function NoteEditor({
  title,
  text,
  style,
  onTitleChange,
  onTextChange,
  onStyleChange,
  onAdd,
  onCancel
}) {
  return (
    <div className="note-editor">

      <div className="note-editor-header">
        <p>Something worth saying ♡</p>

        <h2>Add a little note</h2>

        <span>
          Write something they can keep.
        </span>
      </div>


      <div className="note-form">

        <div className="form-group">

          <label htmlFor="noteTitle">
            Note Title
          </label>

          <input
            id="noteTitle"
            type="text"
            placeholder="A little message for you..."
            value={title}
            onChange={(event) =>
              onTitleChange(event.target.value)
            }
          />

        </div>


        <div className="form-group">

          <label htmlFor="noteText">
            Your Note
          </label>

          <textarea
            id="noteText"
            rows="7"
            placeholder="Write whatever you want to say..."
            value={text}
            onChange={(event) =>
              onTextChange(event.target.value)
            }
          />

        </div>


        <div className="form-group">

          <label>
            Note Style
          </label>

          <div className="note-style-options">

            <button
              type="button"
              className={`note-style-option ${
                style === "simple" ? "selected" : ""
              }`}
              onClick={() =>
                onStyleChange("simple")
              }
            >
              🤍
              <span>Simple</span>
            </button>


            <button
              type="button"
              className={`note-style-option ${
                style === "cute" ? "selected" : ""
              }`}
              onClick={() =>
                onStyleChange("cute")
              }
            >
              🌸
              <span>Cute</span>
            </button>


            <button
              type="button"
              className={`note-style-option ${
                style === "letter" ? "selected" : ""
              }`}
              onClick={() =>
                onStyleChange("letter")
              }
            >
              💌
              <span>Letter</span>
            </button>

          </div>

        </div>


        <div className="note-editor-actions">

          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="button"
            className="primary-button"
            onClick={onAdd}
          >
            Add Note ♡
          </button>

        </div>

      </div>

    </div>
  );
}

export default NoteEditor;