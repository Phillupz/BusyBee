import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { AiOutlineClose } from "react-icons/ai"
import { AiOutlineStar } from "react-icons/ai"
import { AiFillStar } from "react-icons/ai"
import "./Checkbox.css"

function TaskItem({handlePriorityClick, handleCheckChange, handleTaskDelete, task}) {
  
  function taskDelete() {
    handleTaskDelete(task)
  }

  function checkChange(e) {
    handleCheckChange(task, e)
  }

  function priorityClick() {
    handlePriorityClick(task)
  }
 
  const [isShown, setIsShown] = useState(false)

   return (
     <ItemContainer onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      {task.priority 
               ? <StarCont onClick={priorityClick}><AiFillStar color={"#ffff00"} size={22}/></StarCont>
               : <StarCont onClick={priorityClick} ><AiOutlineStar size={22}/></StarCont>
             }
      <label class="checkbox">
         <input onChange={checkChange} checked={task.checked} name="checked" type="checkbox" />
         <DescContainer className={task.checked ? "strike" : ""}>{task.description}</DescContainer>
       </label>
         {isShown && (
           <div>
             <DeleteButton onClick={taskDelete}><AiOutlineClose size={19}/></DeleteButton>
           </div>)
         }
     </ItemContainer>
   )
}

const ItemContainer = styled.div`
  display: grid;
  margin-left: 10px;
  grid-template-columns: 4% 93% 4%;
  align-items:center;
  padding-left: 1%;
  padding-right: 1%;
  width: 60em;
  height:2.5em;
  border-radius: 7px;
  transition: .3s;
  &&:hover {
    background-color: #f5f5f5;
  }
`

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding-top: .5em;
`
const DescContainer = styled.span`
  display:grid;
  justify-items:left;
`

const StarCont = styled.div`
  height:100%;
  width: 100%;
  display:grid;
  align-items:center;
  cursor: pointer;
`

export default TaskItem