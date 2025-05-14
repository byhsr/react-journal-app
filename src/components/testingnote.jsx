// Note.jsx
import Draggable from "react-draggable";

export default function TestingNote() {
  return (
    <Draggable cancel="textarea">
      <div style={{ padding: "1rem", background: "#fff", border: "1px solid #ccc", width: "fit-content" }}>
        <textarea
          style={{
            width: "300px",
            minHeight: "60px",
            resize: "none",
            padding: "1rem",
            borderRadius: "12px",
            fontSize: "1rem",
          }}
          placeholder="Write your note"
        />
      </div>
    </Draggable>
  );
}
