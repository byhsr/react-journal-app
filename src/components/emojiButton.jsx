import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./emojibutton.css";

function EmojiButton({ je, handleChange, className }) {
  const [isToggle, setIsToggle] = useState(false);

  const handleEmojiClick = (emojiData) => {
    const fakeEvent = {
      target: {
        name: "emoji",
        value: emojiData.emoji,
      },
    };
    handleChange(fakeEvent);
    setIsToggle(false);
  };

  return (
    <div className="emoji-wrapper">
      <button onClick={() => setIsToggle((prev) => !prev)}>
        {je.emoji || "😁"}
      </button>

      {isToggle && (
        <div className="emoji-picker-popup">
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
            emojiStyle="apple"
            theme="dark"
            className={className}
          />
        </div>
      )}
    </div>
  );
}

export default EmojiButton;
