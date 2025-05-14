import { useEffect, useState } from "react";
import Note from "./Note";
import ResetButton  from "./resetButton";
import EmojiButton from "./emojiButton";
import EntryList from "./entrylist";
import "/src/app.css"

function Journal() {
  const [je, SetJE] = useState({ entry: "", emoji: "😁" });
  const [entries, setEntries] = useState(()=> {
    const savedEntries = localStorage.getItem("entry");
    return savedEntries ? JSON.parse(savedEntries) : []
  }); 




  useEffect(() => {
    localStorage.setItem("entry", JSON.stringify(entries));
  }, [entries]);

  const handleChange = (c) => {
    SetJE((currdata) => ({
      ...currdata,
      [c.target.name]: c.target.value,
    }));
  };

  const handleReset = () => {
    localStorage.removeItem("entry");  
    setEntries([]);                    
     }


  const handleClick = () => {
    if (!je.entry) {
      return alert("Please add something!");
    }

    const newEntry = {
      ...je,
      date: new Date().toLocaleString(),
    };

    setEntries((ce) => [newEntry, ...ce]); 
    SetJE({ entry: "", emoji: "" }); 
  };

return (
  <>
  
  <div className="base">
    <div className="journal-wrapper">
    <div className="input-section">
      <EmojiButton className="Emoji" je={je} handleChange={handleChange} handleClick={handleClick} />
      <Note className="note" je={je} handleClick={handleClick} handleChange={handleChange} />
     </div>
     
    
    <div className="are">
       
      <div className="action-buttons">
        <ResetButton className="action-bar" handleClick={handleClick} handleReset={handleReset} />
      </div>
      </div>

    </div>
   </div>

     <div className="entries">
     <EntryList entries={entries} />
    </div>

   
  </>
);
}
export default Journal;
