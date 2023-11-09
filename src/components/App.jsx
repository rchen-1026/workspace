import React, { useState } from "react";
import Create from "./Create";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import defaultNotes from "../notes";

function App() {
  const [notes, setNotes] = useState(defaultNotes);

  const AddNote = (newTitle, newContent) => {
    const newNote = {
      key: notes.length + 1,
      title: newTitle,
      content: newContent
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const DeleteNote = (noteKey) => {
    const updatedNotes = notes.filter((note) => note.key !== noteKey);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <Header />
      <Create onCreate={AddNote} />

      {notes.map((note, index) => (
        <Note
          onDelete={() => DeleteNote(note.key)}
          key={index}
          id={note.key}
          data={note}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;