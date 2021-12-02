import React, {useEffect} from 'react';
import './css/App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import {useSelector, useDispatch} from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        }))
      }
      else {
        dispatch(logout());
      }
    })
  });

  return (
    <div className="App">
      <Header/>
      <div className="AppBody">
          <Sidebar/>
          <Feed/>
          <Widgets/>
      </div>
    </div>
  );
}

export default App;
