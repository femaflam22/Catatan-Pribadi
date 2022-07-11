import React from 'react';
import NoteCard from './NoteCard';
import { showFormattedDate } from '../utils/index';

function NoteArcive({notes, onDelete, onArchive}) {
  const filteredNotes = notes.filter((note) => note.archived === true);
  const orderedNotes = filteredNotes.reverse();
  return (
    <div className="arcived">
        <h2>Catatan yang Diarsipkan</h2>
        <hr />
        <div className="item-container">
          {
            (filteredNotes.length === 0) ? <p className='bold'>Tidak ada catatan</p> : ''
          }
          {
            orderedNotes.map((note) => (
              <NoteCard 
                key={note.id} 
                id={note.id}
                showFormattedDate={showFormattedDate(note.createdAt)}
                onDelete={onDelete}
                onArchive={onArchive}
                {...note} />
            ))
          }
        </div>
    </div>
  )
}

export default NoteArcive;