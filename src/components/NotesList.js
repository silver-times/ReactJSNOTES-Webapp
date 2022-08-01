import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list gap-4">
      {notes.map((note) => (
        <Note
          handleDeleteNote={handleDeleteNote}
          text={note.text}
          date={note.date}
          key={note.id}
          id={note.id}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} className="bg-[#67d7cc]" />
    </div>
  );
};

export default NotesList;
