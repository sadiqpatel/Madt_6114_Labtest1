import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NoteList from './components/NoteList';
import Note from './components/Note';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/notes" element={<NoteList />} />
        <Route path="/notes/:noteId" element={<Note />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
