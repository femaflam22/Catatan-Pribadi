import React, { Component } from 'react';
import NoteItem from './NoteItem';
import NoteForm from './NoteForm';
import NoteArcive from './NoteArcive';
import { getInitialData, showFormattedDate } from '../utils/index';

class NoteApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        }

        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onArcivedHandler(id) {
        const note = this.state.notes.filter(note => note.id === id);
        const notes = this.state.notes.filter(note => note.id !== id);
        const updatedNote = {
            id: note.id,
            title: note.title,
            body: note.body,
            createdAt: note.createdAt,
            archived: true,
        };
        notes.push(note);
        this.setState(() => {
            
        });
    }

    onAddNoteHandler({title, body, createdAt, archived}) {
        this.setState((prevState) => {
            return {
              notes: [
                ...prevState.notes,
                {
                  id: parseInt(prevState.notes.length)+1,
                  title,
                  body,
                  createdAt,
                  archived,
                }
              ]
            }
        });
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <NoteItem notes={this.state.notes} showFormattedDate={showFormattedDate} />
                    <NoteForm addNote={this.onAddNoteHandler} />
                </div>
                <NoteArcive notes={this.state.notes} showFormattedDate={showFormattedDate} />
            </div>
        );
    }
}

export default NoteApp;