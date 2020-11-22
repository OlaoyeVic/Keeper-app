import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteTitle, setNoteTitle] = useState([]);

  function addNote(noteTitle) {
    setNoteTitle((prevNote) => {
      return [...prevNote, noteTitle];
    });
  }

  function deleteNote(id) {
    setNoteTitle((prevNote) => {
      return prevNote.filter((noteList, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {noteTitle.map((noteList, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteList.title}
            content={noteList.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
