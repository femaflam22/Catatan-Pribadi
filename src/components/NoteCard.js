import React from 'react'

function NoteCard({id, title, body, createdAt, archived, showFormattedDate}) {
  return (
        <div className="item"> 
            <div className="text">
                <div className="text-top">
                    <h4>{title}</h4>
                    <span className="date">{() => showFormattedDate(createdAt)}</span>
                </div>
                <span>{body}</span>
            </div>
            <div className="last-row">
                <button className="buttonItem move">Arsipkan</button>
                <button className="buttonItem delete">Hapus</button>
            </div>
        </div>
  )
}

export default NoteCard;