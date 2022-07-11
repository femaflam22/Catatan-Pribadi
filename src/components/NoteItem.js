import React from 'react';
import NoteSearch from './NoteSearch';
import NoteCard from './NoteCard';
import { showFormattedDate } from '../utils/index';

function NoteItem({notes, onDelete, onArchive, onSearch}) {
  const filteredNotes = notes.filter((note) => note.archived === false);
  const orderedNotes = filteredNotes.reverse();
  return (
    <div className="left-side">
        <div className="left-heading">
            <h2>Catatan Anda</h2>
            <NoteSearch onSearch={onSearch} />
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
    </div>
  )
}

export default NoteItem;