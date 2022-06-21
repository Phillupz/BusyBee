import React from "react"
import styled from 'styled-components'
import { AiOutlineLeft } from "react-icons/ai"
import { AiOutlineRight } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineLogout } from "react-icons/ai"

const NavContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
  height: 3.75em;
  border-bottom: 1px solid black;
  margin-left: 8px;
  margin-right: 8px;
`

const Logo = styled.img`
  height: 60px;
  width: 60px;
`
const MenuCont = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: grid;
  grid-template-columns: 20% 10%;
  justify-items: center;
  grid-gap: 70%
`

const RightMenuCont = styled.div`
  width:100%;
  height: 100%;
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: center;
`

const RightButtonCont = styled.div`
  height:100%;
  width:75%;
  display: grid;
  justify-content: center;
  grid-gap: 10%;
  align-items: center;
  justify-content: end;
`

const LeftMenuCont = styled.div`
  width:100%;
  height: 100%;
  display: grid;
  grid-template-columns: 10% 90%;
`

const IconCont = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  display: grid;
  justify-content:center;
  align-content: center;
`

const NoteName = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  align-content:center;
  justify-content:start;
  margin-left: 1.5em
`

const UserCont = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  height: 45px;
  width: 45px;
  display: grid;
  justify-content: center;
  align-content: center;
  
`

const User = styled.p`
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: grid;
  align-content: center;
`

function Navigation() {
  return (
    <NavContainer>
      <Logo src="https://i.ibb.co/CtjfVNP/BusyBee.png"/>
      <MenuCont>
        <LeftMenuCont>
          <IconCont>
             <GiHamburgerMenu size={20}/>
          </IconCont>
          <NoteName>Dashboard</NoteName>
        </LeftMenuCont>
        <RightMenuCont>
          <RightButtonCont>
            <AiOutlineLogout size={22}/>
          </RightButtonCont>
          <UserCont>
            <User>P</User>
          </UserCont>
        </RightMenuCont>
      </MenuCont>
    </NavContainer>
  )
}

export default Navigation