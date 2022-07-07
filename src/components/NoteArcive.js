import React from 'react';
import NoteCard from './NoteCard';

function NoteArcive() {
  return (
    <div className="arcived">
        <h2>Catatan yang Diarsipkan</h2>
        <hr />
        <div className="item-container">
            <NoteCard />
        </div>
    </div>
  )
}

export default NoteArcive;