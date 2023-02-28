import './App.css';
import EditablePage from './Objects/EditablePage.js'
import EditableView from './Views/EditableView.js'
import Navbar from './Navbar/Navbar';
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './Authentication/Auth'
import Account from './Authentication/Account'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log(session)
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return (
    <div className="App">
      <div className='content'>
        { !session ? <Auth/> :
        <div className='app-container'>
          <Navbar></Navbar>

          <EditableView/>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
