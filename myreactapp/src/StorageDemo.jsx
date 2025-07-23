// StorageDemo.js
import React, { useState } from 'react';

function StorageDemo() {
  const [text, setText] = useState('');
  const [localResult, setLocalResult] = useState('');
  const [sessionResult, setSessionResult] = useState('');

  const saveToLocal = () => {
    localStorage.setItem('myLocalText', text);
    alert('Saved to localStorage!');
  };

  const loadFromLocal = () => {
    const value = localStorage.getItem('myLocalText');
    setLocalResult(value || '');
  };

  const saveToSession = () => {
    sessionStorage.setItem('mySessionText', text);
    alert('Saved to sessionStorage!');
  };

  const loadFromSession = () => {
    const value = sessionStorage.getItem('mySessionText');
    setSessionResult(value || '');
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Storage Demo</h2>
      <input
        type="text"
        value={text}
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        style={{ padding: '5px', width: '300px' }}
      />
      <br /><br />

      <button onClick={saveToLocal}>Save to Local</button>
      <button onClick={loadFromLocal} style={{ marginLeft: '10px' }}>
        Load from Local
      </button>
      <p><b>Local:</b> {localResult}</p>

      <button onClick={saveToSession}>Save to Session</button>
      <button onClick={loadFromSession} style={{ marginLeft: '10px' }}>
        Load from Session
      </button>
      <p><b>Session:</b> {sessionResult}</p>
    </div>
  );
}

export default StorageDemo;
