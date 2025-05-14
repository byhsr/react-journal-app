import { useEffect, useRef, useState  } from "react";

export default function Note({ className, je, handleChange, handleClick }) {

 
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
     
      textarea.style.height = 'auto';
      textarea.style.width = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
      textarea.style.width = `${textarea.scrollWidth + 10}px`
    }
  }, [je.entry]); 
  return (
    <div>
      <textarea
        ref={textareaRef}
        className={className} 
        placeholder="Write your note"
        value={je.entry}
        name="entry"
        id="entry"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      
      />
    </div>
  );
}
