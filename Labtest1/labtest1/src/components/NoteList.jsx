import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NoteList() {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  function createNote() {
    const newNote = {
      id: Math.random().toString(36).substring(7),
      title: 'New Note',
      body: '',
    };
    setNotes([...notes, newNote]);
  }

  function handleViewNote(noteId) {
    navigate(`/notes/${noteId}`);
  }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={createNote}>Create Note</button>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <button onClick={() => handleViewNote(note.id)}>{note.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
