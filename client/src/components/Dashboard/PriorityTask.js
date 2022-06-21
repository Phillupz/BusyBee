import React, {useState, useEffect} from "react"
import styled from "styled-components"
import { AiFillStar } from "react-icons/ai"
import "./Checkbox.css"

const TaskItem = styled.div`
  display: grid;
  width: 96%;
  height: .1em;
  border-radius: 7px;
  padding-top: 1em;
  padding-bottom: 1.5em;
  padding-left: .2em;
  transition: .3s;
  &&:hover {
    background-color: #f5f5f5;
  }
`

const DescContainer = styled.span`
  display: grid;
  text-align: left;
  align-items: center;
`

function PriorityTask({}) {
 
  const [isShown, setIsShown] = useState(false)
   
   return ( 
    <TaskItem onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      <label class="checkbox">
        <AiFillStar style={{color: "#ffff00"}} />
        <DescContainer>Task Description...</DescContainer>
      </label>
    </TaskItem>
   
   )
}

export default PriorityTask