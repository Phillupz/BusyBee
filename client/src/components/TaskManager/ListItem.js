import React, {useState} from "react"
import styled from "styled-components"
import { AiOutlineClose } from "react-icons/ai"
import './ListItem.css'

function ListItem({selectedList, handleListDelete, handleOpenList, list}) {
  const [isShown, setIsShown] = useState(false)

  function handleClick() {
    handleOpenList(list)
  }

  function listDelete() {
    handleListDelete(list)
  }

  return (
    <ItemContainer class={list.id === selectedList.id ? "selected" : "default"} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
        <ListNameContainer onClick={handleClick}>{list.name.charAt(0).toUpperCase() + list.name.slice(1)}</ListNameContainer>
        {isShown && (<DeleteButton onClick={listDelete}><AiOutlineClose size={17}/></DeleteButton>)}
    </ItemContainer>
  )
}

const ItemContainer = styled.div`
  display: grid;
  align-items: center;
  align-content:center;
  grid-template-columns: 83% 15%;
  margin-left: 3.5px;
  width: 96%;
  height: 40px;
  border-radius: 7px;
  padding:1%;
  cursor: pointer;
  transition: .3s;
  background-color:  ${props => props.class === "selected" ? "#ffff00" : "background-color: #f5f5f5;"};
  &&:hover {
    ${props => props.class === "selected" ? "background-color: none" : "background-color: #f5f5f5;"}
  }
`

const ListNameContainer = styled.p`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 100;
  width: 100%;
  height: 80%;
  text-align: left;
  display: grid;
  align-content:center;
  margin-left:6px;
`

const DeleteButton = styled.button`
  border: none;
  width: 100%;
  cursor: pointer;
  background-color:transparent;
`

export default ListItem