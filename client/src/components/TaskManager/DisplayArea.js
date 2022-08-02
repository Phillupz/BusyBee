import { React, useState} from "react"
import styled from "styled-components"
import { AiOutlineSend } from "react-icons/ai"
import TaskItem from './TaskItem.js'

function DisplayArea({listSearch, handlePriorityClick, handleCheckChange, handleTaskDelete, handleTaskSubmit, taskList}) {
  const [taskInput, setTaskInput] = useState("")

  function taskChange(e) {
    setTaskInput(e.target.value)
  }
  
  function taskSubmit(e) {
    e.preventDefault()
    setTaskInput("")
    handleTaskSubmit(taskInput)
  }

  const displayedElements = taskList.filter((task) => {
    if (task.description.toLowerCase().includes(listSearch.toLowerCase()))
      return task
  })

  const taskComponents = displayedElements.map((task) => {
    return <TaskItem handlePriorityClick={handlePriorityClick} handleTaskDelete={handleTaskDelete} handleCheckChange={handleCheckChange} task={task}/>
  })

  return (
    <TaskCont>
      <TaskDisplay>{taskComponents}</TaskDisplay>
    <TextCont>
        <form >
          <TextInput placeholder="Enter New Task..." value={taskInput} onChange={taskChange}></TextInput>
          <SendButton onClick={taskSubmit}><AiOutlineSend size={22} /></SendButton>
        </form>
      </TextCont>
    </TaskCont>
    
  )
}

const TextCont = styled.div`
  position: absolute;
  background-color: white;
  height: 5.5%;
  width: 70%;
  margin: auto;
  bottom: 40px;
`
const SendButton = styled.button`
  position: absolute;
  right: 40px;
  bottom: 12px;
  background-color: white;
  border: none;
  cursor:pointer;
`
const TextInput = styled.input`
  width: 92%;
  height: 30px;
  border: 1px solid black;
  border-radius: 10px;
  outline: none;
  padding-left: 4px;
  display: grid;
  justify-content: start;
`

const TaskCont = styled.div`
  margin-left: auto;
  margin-right: auto; 
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 15em; 
  grid-gap: 6em;
  justify-content: center;

`

const TaskDisplay = styled.div`
  position: absolute;
  height: 75%;
  margin: auto;
  display: grid;
  grid-auto-rows: 60px;
  overflow-x: hidden;
  overflow-y: scroll; 
  scroll-behavior: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`

 export default DisplayArea