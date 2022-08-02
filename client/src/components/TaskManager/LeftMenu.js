import React from "react"
import styled from "styled-components"
import TaskList from "./TaskList.js"

function LeftMenu({selectedList, lists, listSearch, handleListSearch, handleListDelete, userLists, handleListsubmit, handleListChange, liSearchEngaged, handleListInput, handleOpenList}) {

  return (
    <NavContainer>
      <TaskList selectedList={selectedList} lists={lists} listSearch={listSearch} handleListSearch={handleListSearch} handleListDelete={handleListDelete} handleListsubmit={handleListsubmit} handleListChange={handleListChange} liSearchEngaged={liSearchEngaged} handleListInput={handleListInput} handleOpenList={handleOpenList} userLists={userLists} />
    </NavContainer>
  )
}

const NavContainer = styled.div`
  justify-items: center;
  padding: .59%;
  text-align:center;
  border-right: 1px solid black;
  padding-right: 5%;
`

export default LeftMenu