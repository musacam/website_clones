import React from 'react';
import './css/App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import {useSelector} from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser)

  return (
    <div className="App">
      <Header/>
      {!user ? (<Login/>) : (
        <div className="AppBody">
          <Sidebar/>
          <Feed/>
        </div>
      )}
    </div>
  );
}

export default App;
