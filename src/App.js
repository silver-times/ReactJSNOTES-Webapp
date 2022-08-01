import { nanoid } from "nanoid";
import React, { useState } from "react";

import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Confirm flight",
      date: "15/04/2022",
    },
    {
      id: nanoid(),
      text: "Pack the books!",
      date: "21/04/2022",
    },
    {
      id: nanoid(),
      text: "Order Pizza",
      date: "21/04/2022",
    },
    {
      id: nanoid(),
      text: "Buy milk for tomorrow",
      date: "21/04/2022",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="max-w-[960px] mx-auto px-5">
      <Header />
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
