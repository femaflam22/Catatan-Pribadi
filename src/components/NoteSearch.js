import React from 'react'

function NoteSearch() {
  return (
    <div className="search">
        <input className="input" type="text" placeholder="Cari catatan berdasarkan judul..."/>
        <button className="buttonSearch"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></button>
    </div>
  )
}

export default NoteSearch;