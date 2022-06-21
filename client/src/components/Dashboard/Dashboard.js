import React from 'react'
import DashNav from './DashNav.js'
import Calendar from 'react-calendar';
import styled from 'styled-components';
import './Calendar.css';
import PriorityTask from './PriorityTask.js'
import NoteDisplay from './NoteDisplay.js'

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

const NoteDisplayCont = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding-top: 3.25em;
  padding-bottom: 3.25em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3em;
  margin-bottom: 3em; 
  width: 80%;
  display:grid;
  grid-template-columns: 15% 15% 15% 15% 15%;
  grid-gap: 3em;
  justify-content: center;
`

const CalendarHeader = styled.div`
  margin-top: 1em;
  font-size: 20px;
  width: 81.5%;
`

const Header = styled.div`
  margin-top: 1em;
  font-size: 20px;
`

function Dashboard() {
  
  function onClickDay() {
    console.log("click")
  }  

  const tasks = [1, 2, 3, 4, 6, 7, 8]
  const notes = [1, 2, 3, 4, 5, 6, 7, 8]

  const taskElements = tasks.map((task) => {
    return <PriorityTask />
  })

  const noteComponents = notes.map((note) => {
    return <NoteDisplay note={note} />
  })

  return(
    <DashCont>
      <DashNav />
      <MainDisplayCont>
        <CalendarCont><CalendarHeader>Calendar</CalendarHeader><Calendar onClickDay={onClickDay}/></CalendarCont>
        <TaskCont>
          <Header>Priority Tasks</Header>
          <InnerTaskCont>
            <PriorityTaskCont>{taskElements}</PriorityTaskCont>
          </InnerTaskCont>
        </TaskCont>
      </MainDisplayCont>
      <Header>Notes</Header>
      <NoteDisplayCont>{noteComponents}</NoteDisplayCont>
    </DashCont>
    
  )
}

export default Dashboard