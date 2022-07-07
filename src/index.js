import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import NoteApp from './components/NoteApp';

import './styles/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NoteApp />);

reportWebVitals();
