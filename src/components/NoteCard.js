import React from 'react'

function NoteCard({id, title, body, archived, showFormattedDate, onDelete}) {
  return (
        <div className="item"> 
            <div className="text">
                <div className="text-top">
                    <h4>{title}</h4>
                    <span className="date">{showFormattedDate}</span>
                </div>
                <span>{body}</span>
            </div>
            <div className="last-row">
                {
                    (archived === true) ? <button className="buttonItem move">Pulihkan</button> : <button className="buttonItem move">Arsipkan</button>
                }
                <button className="buttonItem delete"  onClick={() => onDelete(id)}>Hapus</button>
            </div>
        </div>
  )
}

export default NoteCard;