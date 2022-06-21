import React from "react"
import styled from 'styled-components'

const AppDescLeftCont = styled.div`
`

const AppDescriptionImage = styled.img`
`

const AppDescriptionText = styled.p`
`

function AppDescriptionLeft() {
  return (
    <AppDescLeftCont>
      <AppDescriptionImage />
      <AppDescriptionText></AppDescriptionText>
    </AppDescLeftCont>
  )
}

export default AppDescriptionLeft