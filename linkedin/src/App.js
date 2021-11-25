import React from 'react';
import './css/App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="AppBody">
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
