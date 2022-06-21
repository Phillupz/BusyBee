import React from "react"
import styled from 'styled-components'
import AppDescriptionLeft from './AppDescriptionLeft.js'
import AppDescriptionRight from './AppDescriptionRight.js'

const BodyCont = styled.div`
`

function Body() {
  return (
    <BodyCont>
      <AppDescriptionLeft />
      <AppDescriptionRight />
      <AppDescriptionLeft />
    </BodyCont>
  )
}

export default Body