import { React, useState } from 'react';
import Modal from 'react-awesome-modal';
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components"
import { VscAdd } from "react-icons/vsc"
import StartDate from './StartDate.js'
import EndDate from './EndDate.js'

export default function Popup({newEvent, setNewEvent, handleAddEvent}) {
  const [visible, setVisible] = useState(false)

  function addEvent(){
    handleAddEvent()
    setVisible(!visible)
  }

    return (
      <section>
        <Button type="button" value="Open" onClick={() => setVisible(!visible)}><VscAdd size={22}/></Button>
        <Modal visible={visible} width="500" height="400" effect="fadeInUp" onClickAway={() => setVisible(!visible)}>
          <NewEventCont>
          <Image src="https://i.ibb.co/fXCYgsW/Busy-Bee-1.png"/>
            <InnerEventCont>
            <div>
            <TitleInput type="text" placeholder="Add Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
            </div>
            <PickerCont>
              <StartDate newEvent={newEvent} setNewEvent={setNewEvent} />
            </PickerCont>
            <PickerCont2>
              <EndDate newEvent={newEvent} setNewEvent={setNewEvent} />
            </PickerCont2>
            <PopUpButton onClick={addEvent}>
              Add Event
            </PopUpButton>
            </InnerEventCont>
          </NewEventCont>
        </Modal>
      </section>
    )
  }

  const PickerCont2 = styled.div`
  height: 20%;
  `

  const PickerCont = styled.div`
  height: 20%;
  margin-top: 1em;
  `

  const NewEventCont = styled.div`
  margin-top: 2em;
  padding: 1%;
  height:100%;
  height: 100%;
`

const TitleInput = styled.input`
  border: 1px solid black;
  border-radius: 7px;
  height: 1.75em;
  padding: 1%;

`

const Image = styled.img`
  margin-left:auto;
  margin-right:auto;
  padding: 10px;
  height: 8em;
  width: 8em;
  top: 10px;
  margin-bottom: 10px;
`

const InnerEventCont = styled.div`
  height: 50%;
  width: 100%;
  justify-items: center;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  height: 2em;
  width: 6em;
  cursor: pointer;
`
const PopUpButton = styled.button`
  border: none;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 7px;
  height: 1.75em;
  padding: 1%;
  width: 6em;
  cursor: pointer;
`
