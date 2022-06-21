import { React, useState } from "react"
import styled from 'styled-components'

const MainLoginCont = styled.div`
  width: 70%;
  height: 35em;
  display: grid;
  grid-template-columns: 40% 60%;
  margin-top: 4.5em;
  margin-left:auto;
  margin-right:auto;
  position: relative;
  border: 1.5px solid black;
`

const LoginCont = styled.div`
  height: 100%;
  width: 100%;
  margin-left:auto;
  margin-right:auto;
`

const CenterCont = styled.div`
  display:grid;
  position: relative;
  margin-top: 20px;
`

const Image = styled.img`
  margin-left:auto;
  margin-right:auto;
  padding: 10px;
  position: relative;
  height: 12em;
  top: 10px;
  margin-bottom: 10px;
`

const LoginForm = styled.form`
  display: grid;
  grid-auto-rows: 55px;
  height: 90%;
`
const NameCollectionCont = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-left: auto;
  margin-right: auto;
  width: 78%;
`

const NameInput = styled.input`
  border: 1.5px solid black;
  border-radius: 10px;
  height: 4vh;
  outline: none;
  padding-left: 3%;
  width: 83%;
  margin-left: auto;
  margin-right: auto;
`

const LoginInput = styled.input`
  border: 1.5px solid black;
  border-radius: 10px;
  height: 4vh;
  outline: none;
  padding-left: 3%;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
`

const Button = styled.button`
  height: 30px;
  width: 30%;
  margin-left:auto;
  margin-right:auto;
  background-color:white;
  border: 1px solid black;
  border-radius: 10px;
`

const LoginImage = styled.img`
  margin-top: .05em;
  height: 86.5%;
  width: 100%;
`

const ButtonCont = styled.div`
  display: grid;
  grid-auto-rows: 45px;
`

function Signup({ onLogin }) {
  const [UserSignupData, setUserSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  })

  function handleChange(e) {
    const name = e.target.name
    let value = e.target.value
    setUserSignupData({
      ...FormData,
      [name]: value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(UserSignupData),
    })
    .then((r) => r.json())
    .then(onLogin);
}

return (
  <MainLoginCont>
    <LoginCont>
      <CenterCont>
        <Image src="https://i.ibb.co/fXCYgsW/Busy-Bee-1.png"/>
        <LoginForm onSubmit={handleSubmit}>
          <NameCollectionCont>
          <NameInput 
              type="text"
              name="firstName"
              id="first-name"
              placeholder="First Name"
              value={UserSignupData.firstName}
              onChange={handleChange}
            />
            <NameInput 
              type="text"
              name="LastName"
              id="Last-name"
              placeholder="Last Name"
              value={UserSignupData.lastName}
              onChange={handleChange}
            />
          </NameCollectionCont>
          <LoginInput 
            type="text"
            name="username"
            id="username"
            placeholder="Email"
            value={UserSignupData.username}
            onChange={handleChange}
          />
          <LoginInput
            type="password"
            name='password'
            id="password"
            placeholder="Password"
            value={UserSignupData.password}
            onChange={handleChange} 
          />
          <LoginInput
            type="password"
            name="passwordConfirmation"
            id="password_confirmation"
            placeholder="Confirm Password"
            value={UserSignupData.passwordConfirmation}
            onChange={handleChange} 
          />
          <ButtonCont>
            <Button>login</Button>
            <Button>Signup</Button>
          </ButtonCont>
        </LoginForm>
      </CenterCont>
    </LoginCont>
    <LoginImage src="https://i.ibb.co/yV3SjcW/header-image.jpg" />
  </MainLoginCont>
 )
}

export default Signup