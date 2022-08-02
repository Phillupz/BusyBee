import { React } from "react"
import styled from "styled-components"
import { AiFillStar } from "react-icons/ai"

function PriorityTask({task}) {
   return ( 
    <TaskItem >
      <label class="checkbox">
        <StarCont>
          <AiFillStar style={{color: "#ffff00"}} />
        </StarCont>
        <DescContainer>{task.description}</DescContainer>
      </label>
    </TaskItem>
   
   )
}

const StarCont = styled.div`
`

const TaskItem = styled.div`
  margin-left: 10px;
  display: grid;
  align-content:center;
  padding-left: 1%;
  padding-right: 1%;
  width: 96%;
  height:2.5em;
  border-radius: 7px;
  transition: .3s;
  &&:hover {
    background-color: #f5f5f5;
`

const DescContainer = styled.span`
  display: grid;
  text-align: left;
`

export default PriorityTask