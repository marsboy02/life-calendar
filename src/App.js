// src/App.js

import React, { useState } from 'react';
import LifeCalendar from './LifeCalendar';
import './App.css';

function App() {
    const [birthdate, setBirthdate] = useState('2002-06-19');

    return (
        <div className="App">
            <header className="App-header">
                <h2>Life Calendar</h2>
                <input
                    type="date"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    style={{ padding: '0.5em', fontSize: '1em', marginBottom: '20px' }}
                />
                <LifeCalendar birthdate={birthdate} />
            </header>
        </div>
    );
}

export default App;
