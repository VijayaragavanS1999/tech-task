import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";

import notes from "./notes";
import CreateArea from "./CreateArea";
import Login from "./Login";

const App = () => {
  const [notes, setnotes] = useState([]);

  function addNote(note) {
    setnotes((prev) => {
      return [...prev, note];
    });
  }
  function deleteNote(id) {
    setnotes((prev) => {
      return prev.filter((createNote, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Login />
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((createNote, index) => (
        <Note
          key={index}
          id={index}
          fname={createNote.fname}
          lname={createNote.lname}
          email={createNote.email}
          type={createNote.type}
          phone={createNote.phone}
          password={createNote.password}
          cpassword={createNote.cpassword}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
};

export default App;
