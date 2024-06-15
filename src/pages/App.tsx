import React, { useState, ChangeEvent } from 'react';
import LifeCalendar from './LifeCalendar';
import '../style/App.css';

const App: React.FC = () => {
    const [birthdate, setBirthdate] = useState<string>('2002-06-19');

    const handleBirthdateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBirthdate(e.target.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2>Life Calendar</h2>
                <input
                    type="date"
                    value={birthdate}
                    onChange={handleBirthdateChange}
                    style={{ padding: '0.5em', fontSize: '1em', marginBottom: '20px' }}
                />
                <LifeCalendar birthdate={birthdate} />
            </header>
        </div>
    );
};

export default App;
