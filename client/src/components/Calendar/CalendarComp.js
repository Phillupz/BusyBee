import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import './Calendar.css'
import CalendarNav from './CalendarNav.js'
import Popup from './Popup.js'
import EventPopup from './EventPopup.js'
import styled from 'styled-components'


const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

function CalendarComp({initial, setInitial, setIsAuthenticated, setUser, user}) {
  const [eventVisible, setEventVisible] = useState(false)
  const [allEvents, setAllEvents] = useState([])
  const [today, setToday] = useState(() => {
    const current = new Date()
    return current
  })

  useEffect(() => {
    fetch('/authorized_user')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          const eventStart = user.calendar_events.filter((event) => {
            return event.start = new Date(event.start)
          })
          const updatedEvents = eventStart.filter((event) => {
            return event.end = new Date(event.end)
          })
          setAllEvents(updatedEvents)
          setUser(user)
          setInitial(user.first_name[0])
        })
      }
    })
  },[])

    const [newEvent, setNewEvent] = useState({ user_id: user.id, title: "", start: today, end: today,  })
    const [selectedEvent, setSelectedEvent] = useState([])
   
    function handleOpenEvent(event) {
      setSelectedEvent(event)
      setEventVisible(!eventVisible)
    }

    function handleAddEvent() {
      const conDate = {
        ...newEvent,
        start: `${newEvent.start.getFullYear()}, ${newEvent.start.getMonth() + 1}, ${newEvent.start.getDate()}, ${newEvent.start.getHours()}:${newEvent.start.getMinutes()}:00`,
        end: `${newEvent.end.getFullYear()}, ${newEvent.end.getMonth() + 1}, ${newEvent.end.getDate()}, ${newEvent.end.getHours()}:${newEvent.end.getMinutes()}:00`
      }
      console.log(conDate)
      fetch('/calendar_events', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(conDate),
      })
        .then((r) => r.json())
        .then((data) => {
          const allDates = [...allEvents, data]
          const eventStart = allDates.filter((event) => {
            return event.start = new Date(event.start)
          })
          const updatedEvents = eventStart.filter((event) => {
            return event.end = new Date(event.end)
          })
          setAllEvents(updatedEvents)
          setNewEvent({
            user_id: user.id, title: "", start: today, end: today
          })
        })
    }

    function handleUpdateEvent(){
      const conDate = {
        ...newEvent,
        start: `${newEvent.start.getFullYear()}, ${newEvent.start.getMonth() + 1}, ${newEvent.start.getDate()}, ${newEvent.start.getHours()}:${newEvent.start.getMinutes()}:00`,
        end: `${newEvent.end.getFullYear()}, ${newEvent.end.getMonth() + 1}, ${newEvent.end.getDate()}, ${newEvent.end.getHours()}:${newEvent.end.getMinutes()}:00`
      }
      console.log(conDate)
      fetch(`/calendar_events/${selectedEvent.id}`, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(conDate),
      })
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
        const newEventList = allEvents.map((event) => {
          if (event.id === data.id) {
            return data
          } else {
            return event
          }
        })
        const eventStart = newEventList.filter((event) => {
          return event.start = new Date(event.start)
        })
        const updatedEvents = eventStart.filter((event) => {
          return event.end = new Date(event.end)
        })
        setAllEvents(updatedEvents)
        setNewEvent({
          user_id: user.id, title: "", start: today, end: today
        })
      })
    }

    function handleDeleteEvent() {
      fetch(`/calendar_events/${selectedEvent.id}`, {
        method: "DELETE",
      })
      const postEventDelete = allEvents.filter((event) => {
        return event.id !== selectedEvent.id
      })
      setAllEvents(postEventDelete)
      setEventVisible(!eventVisible)
    }


  return (
    <div className="App">
      <CalendarNav initial={initial} setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>
      <EventPopup handleDeleteEvent={handleDeleteEvent} newEvent={newEvent} setNewEvent={setNewEvent} handleUpdateEvent={handleUpdateEvent} selectedEvent={selectedEvent} setVisible={setEventVisible} visible={eventVisible} />
      <EventAddCont>
        <Popup handleAddEvent={handleAddEvent} newEvent={newEvent} setNewEvent={setNewEvent} />
      </EventAddCont>
      <Calendar onSelectEvent={handleOpenEvent} localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
    </div>
  )
}

const EventAddCont = styled.div`
  position: relative;
  top: 4.9em;
  left: 16.5em;
  width: 2em;
`

export default CalendarComp
