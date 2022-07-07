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
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <NoteItem notes={this.state.notes} showFormattedDate={showFormattedDate} />
                    <NoteForm />
                </div>
                <NoteArcive />
            </div>
        );
    }
}

export default NoteApp;