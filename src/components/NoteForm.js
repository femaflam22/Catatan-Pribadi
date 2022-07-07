import React from 'react'

function NoteForm() {
  return (
    <div className="right-side">
        <div className="main">
            <div className="text">
                <h2>Tambah Catatan</h2>
                <p>Lengkapi seluruh data untuk membuat catatan baru</p>
            </div>
            <div className="input-text">
                <input type="text" placeholder='Judul Catatan' />
            </div>
            <div className="input-text">
                <p>Catatan :</p>
                <textarea cols="5" rows="5"></textarea>
            </div>
            <button className="buttonAdd">Buat Catatan</button>
        </div>
    </div>
  )
}

export default NoteForm;