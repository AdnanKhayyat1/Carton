import './App.css';
import EditablePage from './EditablePage.js'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Auth from './Auth'
import Account from './Account'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])
  return (
    <div className="App">
      <div className='content' style={{ padding: '50px 0 100px 0' }}>
        {!session ? <Auth/> : <EditablePage/>}
      </div>
    </div>
  );
}

export default App;
