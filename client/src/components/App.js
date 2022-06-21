import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import styled from 'styled-components'
import Home from './Home/Home.js'
import Login from './AccountAccess/Login.js'
import Signup from './AccountAccess/Signup.js'
import Dashboard from './Dashboard/Dashboard.js'
import Note from './Notebook/Note.js'

const AppCont = styled.div`
  text-align: center;
`

function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, [])

  console.log(user)
    
  return (
    <AppCont>
      <Switch>
        {/* <Route exact path="/notes">
          <Note />
        </Route> */}
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </AppCont>
  )
}

export default App;
