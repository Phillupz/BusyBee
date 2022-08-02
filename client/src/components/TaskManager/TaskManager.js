import {React, useState, useEffect } from "react"
import LeftMenu from "./LeftMenu.js"
import DisplayArea from "./DisplayArea.js"
import styled from "styled-components"
import TaskNav from "./TaskNav.js"

const TaskManCont = styled.div`
  height: 86.5vh;
  display: grid;
  grid-template-columns: 25% 74%;
  grid-column-gap: 1%;
  margin:18px
`

  function TaskManager ({initial, setInitial, setUser, setIsAuthenticated, user}) {
  const [taskList, setTaskList] = useState([])
  const [lists, setLists] = useState([])
  const [selectedList, setSelectedList] = useState("")
  const [liSearchEngaged, setLiSearchEngaged] = useState(true)
  const [listInput, setListInput] = useState("")
  const [taskSearchEngaged, setTaskSearchEngaged] = useState(false)
  const [listSearch, setListSearch] = useState("")
  const [taskSearch, setTaskSearch] = useState("")
  

  useEffect(() => {
    fetch('/authorized_user')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setUser(user)
          setInitial(user.first_name[0])
          setLists(user.task_lists)
        })
      }
    })
  }, [])
 
  function handleOpenList(list){
    const id = list.id
    setTaskSearchEngaged(false)
    setSelectedList(list)
    fetch(`/task_lists/${id}`)
    .then((r) => r.json())
    .then((data) => setTaskList((data.tasks).reverse()))
    setListSearch("")
  }

  function handleListInput() {
    setLiSearchEngaged(!liSearchEngaged)
  }

  function handleListChange(e) {
    setListInput(e.target.value)
  }

  function handleListsubmit(){
    setLiSearchEngaged(!liSearchEngaged)
    const configObj = {
      name: listInput,
      user_id: user.id,
    }
    fetch("/task_lists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(configObj)
    })
    .then((r) => r.json())
    .then((data) => {
      setLists([...lists, data])
      setSelectedList(data)
      setTaskList([])
    })
  }


  function handleTaskSubmit(taskInput){
    const configObj = {
      priority: false,
      checked: false,
      description: taskInput,
      task_list_id: selectedList.id
    }
    fetch("/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(configObj)
    })
    .then((r) => r.json())
    .then((data) => {
      setTaskList(() => {
        return [data, ...taskList]
      })
    })
  }

  function handleTaskDelete(task) {
    setTaskSearch("")
    fetch(`/tasks/${task.id}`, {
      method: "DELETE",
    })
    const postTaskDelete = taskList.filter((taskItem) => {
      return taskItem.id !== task.id
    })
    setTaskList(postTaskDelete)
  }

  function handleListDelete(list) {
    setTaskList([])
    fetch(`/task_lists/${list.id}`, {
      method: "DELETE",
    })
    const postListDelete = lists.filter((listItem) => {
      return listItem.id !== list.id
    })
    setLists(postListDelete)
    setSelectedList("")
  }

  function handleCheckChange(task, e) {
    setTaskSearch("")
    fetch(`/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...task, 
        checked: e.target.checked
      })
    })
    .then((r) => r.json())
    .then((data) => {
      const newList = taskList.map((taskItem) => {
        if (taskItem.id === task.id) {
          return data
        } else {
          return taskItem
        }
      })
      setTaskList(newList)
    })
  }

  function handlePriorityClick(task) {
    console.log('click')
    setTaskSearch("")
    const configObj = {
      ...task, 
      priority: !task.priority
    }
    fetch(`/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(configObj)
    })
    .then((r) => r.json())
    .then((data) => {
      const newList = taskList.map((taskItem) => {
        if (taskItem.id === task.id) {
          return data
        } else {
          return taskItem
        }
      })
      setTaskList(newList)
    })
  }

  function handleListSearch(e) {
    setListSearch(e.target.value)
  }

    return (
    <>
    <TaskNav initial={initial} setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>
      <TaskManCont>
          <LeftMenu selectedList={selectedList} handleListDelete={handleListDelete} handleListSearch={handleListSearch} listSearch={listSearch} lists={lists} user={user} handleListsubmit={handleListsubmit} liSearchEngaged={liSearchEngaged} handleOpenList={handleOpenList} handleListChange={handleListChange} handleListInput={handleListInput}/>
          <DisplayArea listSearch={listSearch} handlePriorityClick={handlePriorityClick} handleTaskDelete={handleTaskDelete} handleTaskSubmit={handleTaskSubmit} taskList={taskList} handleCheckChange={handleCheckChange} />
      </TaskManCont>
    </>
    )
  }

export default TaskManager