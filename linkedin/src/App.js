import React from 'react';
import './css/App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="AppBody">
        <Sidebar/>
        <Feed/>
      </div>
    </div>
  );
}

export default App;