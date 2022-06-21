import React from "react"
import styled from "styled-components"

const NoteDisplayCont = styled.div`
  width: 12em;
  height 16.8em;
  border: 1px solid black;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 85% 15%
`

const NoteTextCont = styled.div`
  width: 100%;
  height: 100%;
`

const InnerNoteTextCont = styled.div`
  height: 100%;
  padding: 3%;
`

const NoteText = styled.div`
  text-align: left;
  font-size: 10px;
  height: 95%;
  overflow-x: hidden;
`

const NoteInfoCont = styled.div`
  width: 100%;
  height: 100%;
  border-top: 1px solid black;
  display:grid;
  align-content: center;
`

const NoteName = styled.p`
  font-size: 14px;
`

const Header = styled.div`
  margin-top: 2em;
  font-size: 20px
`

function NoteDisplay() {
  return (
    <NoteDisplayCont>
      <NoteTextCont>
        <InnerNoteTextCont>
          <NoteText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas pharetra. Leo a diam sollicitudin tempor id eu. Aliquet lectus proin nibh nisl condimentum. Molestie nunc non blandit massa. Risus feugiat in ante metus dictum at. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Etiam tempor orci eu lobortis elementum nibh. Turpis tincidunt id aliquet risus feugiat in. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Viverra justo nec ultrices dui. Eget nulla facilisi etiam dignissim diam. Sociis natoque penatibus et magnis dis. Interdum velit euismod in pellentesque massa placerat duis. Amet porttitor eget dolor morbi non. Amet massa vitae tortor condimentum lacinia quis vel eros. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Ut diam quam nulla porttitor massa id neque aliquam vestibulum.</NoteText> 
        </InnerNoteTextCont>
      </NoteTextCont>
      <NoteInfoCont>
        <NoteName>Name</NoteName>
      </NoteInfoCont>
    </NoteDisplayCont>
  )
}

export default NoteDisplay