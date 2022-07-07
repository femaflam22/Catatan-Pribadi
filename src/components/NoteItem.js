import React from 'react';
import NoteSearch from './NoteSearch';
import NoteCard from './NoteCard';

function NoteItem({notes, showFormattedDate}) {
  return (
    <div className="left-side">
        <div className="left-heading">
            <h2>Catatan Anda</h2>
            <NoteSearch />
            <div className="item-container">
              {
                notes.map((note) => (
                  <NoteCard 
                    key={note.id} 
                    id={note.id}
                    showFormattedDate={showFormattedDate}
                    {...note} />
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default NoteItem;