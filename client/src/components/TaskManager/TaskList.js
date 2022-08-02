import React from "react"
import styled from "styled-components"
import ListItem from "./ListItem.js"
import { VscAdd } from "react-icons/vsc"
import { AiOutlineSearch } from "react-icons/ai"

function TaskList({selectedList, lists, listSearch, handleListSearch, handleListDelete, handleListsubmit, handleListChange, liSearchEngaged, handleListInput, handleOpenList}) {

  const displayedElements = lists.filter((list) => {
    if (list.name.toLowerCase().includes(listSearch.toLowerCase()))
      return list
  })


  const listElement = displayedElements.reverse().map((list) => {
    return (
      <React.Fragment>
        <div><ListItem selectedList={selectedList} handleListDelete={handleListDelete} handleOpenList={handleOpenList} list={list} /></div>
      </React.Fragment>
    );
  })

  function handleClick() {
    handleListInput()
  }

  function searchChange(e){
    handleListSearch(e)
  }

  function listSubmit(e){
    e.preventDefault()
    handleListsubmit()
  }

  function listChange(e) {
    handleListChange(e)
  }

  return (
    <React.Fragment>
      <InputCont>

      {liSearchEngaged
      ? <Search onChange={searchChange} value={listSearch} placeholder="Search..."></Search>
      : <Form onSubmit={listSubmit}><ListInput onChange={listChange} onSubmit={listSubmit} placeholder="Enter New List..."></ListInput></Form>
      }
      
      {liSearchEngaged
        ? <Button onClick={handleClick}><VscAdd size={18}/></Button>
        : <Button onClick={handleClick}><AiOutlineSearch size={18}/></Button>
        }
      </InputCont>
      <ListContainer>{listElement}</ListContainer>
    </React.Fragment>
  )
}

const ListContainer = styled.div`
  margin: auto;
  width: 50%;
  width: 98%;
  height: 79.5%;
  display: grid;
  grid-auto-rows: 48px;
`

const InputCont = styled.div`
  margin-bottom: 3%;
  margin-left: 5px;
  padding-bottom: 2.75em;
  font-family: Helvetica;
  width: 100%;
  text-align:left;
  height: 25px;
  display: grid;
  grid-template-columns: 90% 10%;
  border-bottom: 1px solid black
`



const Button = styled.button`
  background-color: white;
  border: none;
  height: 20px;
  margin-top: .25em;
  cursor:pointer;
`
const Search = styled.input`
  width: 96%;
  height: 25px;
  border: 1px solid black;
  border-radius: 7px;
  margin-bottom: 12px;
  padding-left: 3px;
  outline:none
`

const ListInput = styled.input`
  width: 96%;
  height: 25px;
  border: 1px solid black;
  border-radius: 7px;
  margin-bottom: 12px;
  padding-left: 3px;
  outline:none
`
const Form = styled.form`
  height: 30px;
  margin-bottom: 11px
`

export default TaskList