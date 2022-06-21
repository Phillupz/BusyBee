import React from "react"
import styled from 'styled-components'
import Navigation from './Navigation.js'
import Header from './Header.js'
import Body from './Body.js'

const HomeCont = styled.div`
  width: 100%;
  height: 1400px;
`

function Home() {
  return (
    <HomeCont>
      <Navigation />
      <Header />
      <Body />
    </HomeCont>
  )
}

export default Home