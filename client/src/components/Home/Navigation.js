import React from "react"
import styled from 'styled-components'

const NavContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 89% 10%;
  height: 3.75em;
  background-color: grey;
`

const Logo = styled.img`
  height: 4em;
  width: 4em;
`

const ButtonCont = styled.div`
  width: 90%;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 50% 50%;
  justify-items: center;
`

const LoginButton = styled.button`
  height: 2.3em;
  width: 4.5em;
  text-align:center;
  background: none;
  border: 1px solid black
`

const SignupButton = styled.button`
  height: 2.3em;
  width: 4.5em;
  text-align: center;
  background: none;
  border: 1px solid black
`

function Navigation() {
  return (
    <NavContainer>
     
        <Logo src="https://i.ibb.co/CtjfVNP/BusyBee.png"/>
    
      <ButtonCont>
        <LoginButton>Login</LoginButton>
        <SignupButton>Signup</SignupButton>
      </ButtonCont>
    </NavContainer>
  )
}

export default Navigation