import {React, useEffect} from 'react'
import DashNav from './DashNav.js'
import Calendar from 'react-calendar';
import styled from 'styled-components';
import './Calendar.css';
import PriorityTask from './PriorityTask.js'
import './Sidebar.css';

function Dashboard({initial, setInitial, setPriorityTasks, priorityTasks, setIsAuthenticated, setUser}) {

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
  },[])

  const taskComponents = priorityTasks.map((task) => {
    return <PriorityTask task={task}/>
  })

  return(
    <DashCont>
      <DashNav initial={initial} setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>
      <MainDisplayCont>
        <CalendarCont><TopHeaders>Calendar</TopHeaders><Calendar/></CalendarCont>
        <TaskCont>
          <TopHeaders>Priority Tasks</TopHeaders>
          <InnerTaskCont>
            <PriorityTaskCont>{taskComponents}</PriorityTaskCont>
          </InnerTaskCont>
        </TaskCont>
      </MainDisplayCont>
    </DashCont>
    
  )
}

const DashCont = styled.div`
  text-align: center;
`

const MainDisplayCont = styled.div`
  padding: 1em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1em;
  height: 25em;
  width: 80%;
  display: grid;
  align-items:end;
  grid-template-columns: 35% 65%;
`

const PriorityTaskCont = styled.div`
  margin: .25em;
  height: 98%;
  width: 98%;
  justify-items:center;
  display: grid;
  grid-auto-rows: 55px;
  space-around: .1em;
  overflow-x: hidden;
  overflow-y: scroll; 
  scroll-behavior: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`

const CalendarCont = styled.div`
  height: 25em;
  width:100%;
  display: grid;
  grid-template-rows: 20% 80%;
 `

 const TaskCont = styled.div`
   height: 25em;
   overflow-x: hidden;
   overflow-y: scroll; 
   scroll-behavior: auto;
   display:grid;
   grid-template-rows: 20% 80%;
   &::-webkit-scrollbar {
   display: none;
 }
`

const InnerTaskCont = styled.div`
  border: 1px solid black;
  border-radius: 10px;
`

const TopHeaders = styled.div`
  margin-top: 1em;
  font-size: 20px;
  width: 81.5%;
`

export default Dashboard