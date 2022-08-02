import React, { useState, useEffect } from "react"
import { Switch, useHistory, Route } from "react-router-dom"
import styled from 'styled-components'
import LoginForm from './AccountAccess/LoginForm.js'
import Dashboard from './Dashboard/Dashboard.js'
import TaskManager from './TaskManager/TaskManager.js'
import Calendar from './Calendar/CalendarComp.js'


const AppCont = styled.div`
  text-align: center;
`

function App() {
  const history = useHistory()
  const [user, setUser] = useState([])
  const [priorityTasks, setPriorityTasks] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [initial, setInitial] = useState("")

  useEffect(() => {
    fetch('/authorized_user')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setUser(user)
          setInitial(user.first_name[0])
          const prioritizedTasks = user.tasks.filter((task) => {
            if (task.priority === true) {
              return task
            }
          })
          setPriorityTasks(prioritizedTasks.reverse())
        })
      }
    })
  }, [])
    
  return (
    <AppCont>
      <Switch>
        <Route exact path="/dashboard/calendar">
          <Calendar setInitial={setInitial} initial={initial} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />
        </Route>
        <Route exact path="/dashboard/taskmanager">
          <TaskManager setInitial={setInitial} initial={initial} setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} />
        </Route>
        <Route exact path={"/dashboard"}>
          <Dashboard setInitial={setInitial} initial={initial} setPriorityTasks={setPriorityTasks} priorityTasks={priorityTasks} setUser={setUser} setIsAuthenticated={setIsAuthenticated} user={user} />
        </Route>
        <Route exact path="/login">
          <LoginForm setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>
        </Route>
      </Switch>
    </AppCont>
  )
}

export default App;
