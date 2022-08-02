import React from "react"
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { AiOutlineLogout } from "react-icons/ai"
import Sidebar from './Sidebar.js'
import '../Dashboard/Sidebar.css'

function DashNav({initial, setIsAuthenticated, setUser}) {
  const history = useHistory()

  function handleLogout() {
    fetch('/logout',{
      method:'DELETE'
  })
    .then(()=>{
      history.push('/login')
      setIsAuthenticated(false)
      setUser(null)
    })
  }

  return (
    <NavContainer>
      <Logo>
        <Sidebar />
        <LogoImage src="https://i.ibb.co/CtjfVNP/BusyBee.png"/>
      </Logo>
      <MenuCont>
        <LeftMenuCont>
          <IconCont>
          </IconCont>
          <NoteName>Task Manager</NoteName>
        </LeftMenuCont>
        <RightMenuCont>
          <RightButtonCont>
            <AiOutlineLogout onClick={handleLogout} size={22}/>
          </RightButtonCont>
          <UserCont>
            <User>{initial}</User>
          </UserCont>
        </RightMenuCont>
      </MenuCont>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
  height: 3.75em;
  border-bottom: 1px solid black;
`

const Logo = styled.div`
  height: 60px;
  width: 40px;
  width: 100%;
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
  cursor: pointer;
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

const LogoImage = styled.img`
  height: 60px;
  width: 60px;
`

export default DashNav