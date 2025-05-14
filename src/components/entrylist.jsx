import "./entrylist.css";

export default function EntryList({ entries }) {
  return (
    <div className="entry-list">
      {entries.map((e, i) => (
        <div key={i} className="entry-card">
          <div className="entry-emoji">{e.emoji}</div>
          <div className="entry-note">{e.entry}</div>
          <div className="entry-date">{e.date}</div>
        </div>
      ))}
    </div>
  );
}
