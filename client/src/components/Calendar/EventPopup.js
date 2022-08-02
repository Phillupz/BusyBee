import React from 'react';
import Modal from 'react-awesome-modal';
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components"
import StartDate from './StartDate.js'
import EndDate from './EndDate.js'

export default function EventPopup({handleDeleteEvent, handleUpdateEvent, selectedEvent, setVisible, visible, newEvent, setNewEvent}) {

  function updateEvent() {
    handleUpdateEvent()
    setVisible(!visible)
  }

  function deleteEvent() {
    handleDeleteEvent()
  }
  
    return (
      <section>
        <Modal visible={visible} width="600" height="500" effect="fadeInUp" onClickAway={() => setVisible(!visible)}>
          <NewEventCont>
          <Image src="https://i.ibb.co/PZMcPpw/Busy-Bee-1-1.png"/>
          <Header>Event Details</Header>
            <InnerEventCont>
            <TitleInput value={newEvent.title} type="text" placeholder={selectedEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
            <StartDate newEvent={newEvent} setNewEvent={setNewEvent} />
            <EndDate newEvent={newEvent} setNewEvent={setNewEvent} />
            <ButtonCont>
              <UpdateButton onClick={updateEvent}>Update</UpdateButton>
              <DeleteButton onClick={deleteEvent}>Delete</DeleteButton>
            </ButtonCont>
            </InnerEventCont>
          </NewEventCont>
        </Modal>
      </section>
    )
  }

const NewEventCont = styled.div`
  height:100%;
  height: 100%;
`

const TitleInput = styled.input`
  border: 1px solid black;
  border-radius: 7px;
  height: 1.75em;
  padding: 1%;
  width: 100%;
`

const Image = styled.img`
  margin-left:auto;
  margin-right:auto;
  padding: 10px;
  height: 8em;
  width: 10em;
  margin-top: 3em; 
`

const Header = styled.p`

`

const InnerEventCont = styled.div`
  height: 30%;
  width: 100%;
  display: grid;
  grid-template-rows: 25% 25% 25% 25%;
  justify-items: center;
  justify-content: center;
  

`

const ButtonCont = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
  justify-content: center;
`
const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 7px;
  height: 1.75em;
  width: 5em;
  cursor: pointer;
`

const UpdateButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 7px;
  height: 1.75em;
  width: 5em;
`
