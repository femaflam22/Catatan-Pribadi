import React from 'react';
import NoteSearch from './NoteSearch';
import NoteCard from './NoteCard';
import { showFormattedDate } from '../utils/index';

function NoteItem({notes, onDelete}) {
  const filteredNotes = notes.filter((note) => note.archived === false);
  return (
    <div className="left-side">
        <div className="left-heading">
            <h2>Catatan Anda</h2>
            <NoteSearch />
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
    </div>
  )
}

export default NoteItem;