import React from 'react';
import NoteCard from './NoteCard';
import { showFormattedDate } from '../utils/index';

function NoteArcive({notes, onDelete}) {
  const filteredNotes = notes.filter((note) => note.archived === true);
  return (
    <div className="arcived">
        <h2>Catatan yang Diarsipkan</h2>
        <hr />
        <div className="item-container">
          {
            filteredNotes.map((note) => (
              <NoteCard 
                key={note.id} 
                id={note.id}
                showFormattedDate={showFormattedDate(note.createdAt)}
                onDelete={onDelete}
                {...note} />
            ))
          }
        </div>
    </div>
  )
}

export default NoteArcive;