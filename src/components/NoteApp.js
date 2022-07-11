import React, { Component } from 'react';
import NoteItem from './NoteItem';
import NoteForm from './NoteForm';
import NoteArcive from './NoteArcive';
import { getInitialData } from '../utils/index';

class NoteApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArcivedHandler = this.onArcivedHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchNote = this.onSearchNote.bind(this);
    }

    onArcivedHandler(id) {
        const note = this.state.notes.filter(note => note.id === id);
        const notes = this.state.notes.filter(note => note.id !== id);
        let newArchive;
        if (note[0].archived === true) {
            newArchive = false;
        } else {
            newArchive = true;
        }

        this.setState(() => {
            return {
              notes: [
                ...notes,
                {
                    id: note[0].id,
                    title: note[0].title,
                    body: note[0].body,
                    createdAt: note[0].createdAt,
                    archived: newArchive,
                },
              ]
            }
        });
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
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

    onSearchNote(search) {
        let notes;
        if (search !== '' && search.length !== 1) {
            notes = this.state.notes.filter((note) => {
                return note.title.toLowerCase().startsWith(search.toLowerCase());
            });
        } else {
            notes = getInitialData();
        }

        this.setState({ notes });
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <NoteItem notes={this.state.notes} onSearch={this.onSearchNote} onDelete={this.onDeleteHandler} onArchive={this.onArcivedHandler} />
                    <NoteForm addNote={this.onAddNoteHandler} />
                </div>
                <NoteArcive notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArcivedHandler} />
            </div>
        );
    }
}

export default NoteApp;