import { React, useState } from "react"
import {useHistory} from "react-router-dom"
import styled from 'styled-components'

function Signup({setShowLogin, setUser}) {
  const history = useHistory()
  const [errors, setErrors] = useState([])
  const [userSignupData, setUserSignupData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
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
    body: JSON.stringify(userSignupData),
    })
    .then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => {
          history.push("/dashboard")
          setUser(user)
        })
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })
}

const errorComponents = errors.map((error) => {
  return <ErrorLi>{error}</ErrorLi>
})

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
              value={userSignupData.first_name}
              onChange={handleChange}
            />
            <NameInput 
              type="text"
              name="LastName"
              id="Last-name"
              placeholder="Last Name"
              value={userSignupData.last_name}
              onChange={handleChange}
            />
          </NameCollectionCont>
          <LoginInput 
            type="text"
            name="username"
            id="username"
            placeholder="Email"
            value={userSignupData.username}
            onChange={handleChange}
          />
          <LoginInput
            type="password"
            name='password'
            id="password"
            placeholder="Password"
            value={userSignupData.password}
            onChange={handleChange} 
          />
          <LoginInput
            type="password"
            name="passwordConfirmation"
            id="password_confirmation"
            placeholder="Confirm Password"
            value={userSignupData.password_confirmation}
            onChange={handleChange} 
          />
          <ButtonCont>
            <Button>Create</Button>
          </ButtonCont>
        </LoginForm>
        <Button onClick={() => setShowLogin(true)}>Login</Button>
        <ErrorUl>{errorComponents}</ErrorUl>
      </CenterCont>
    </LoginCont>
  </MainLoginCont>
 )
}

const MainLoginCont = styled.div`
  width: 35em;
  height: 35em;
  display: grid;
  margin-top: 4.75em;
  margin-left:auto;
  margin-right:auto;
  position: relative;
  border: 1.5px solid black;
  border-radius: 7px;
`

const LoginCont = styled.div`
  height: 99.25%;
  width: 100%;
  margin-left:auto;
  margin-right:auto;
  max-height: 100%
`

const CenterCont = styled.div`
  display:grid;
  position: relative;
  margin-top: 20px;
`

const Image = styled.img`
  margin-left:auto;
  margin-right:auto;
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
  width: 76%;
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
  transition: .3s;
  cursor:pointer;
  &&:hover {
    background-color: #ffff00
  }
`

const LoginImage = styled.img`
  margin-top: .2%;
  margin-bottom: .23%;
  height: 99%;
  width: 100%;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
`

const ButtonCont = styled.div`
  display: grid;
  grid-auto-rows: 45px;
`

const ErrorUl = styled.ul`
  margin-top: 1em;
  height: 2em;
  width: 100%;
  text-align:center;
  list-style-type: none;
`

const ErrorLi = styled.li`
  width: 92.5%;
  list-style-type: none;
  color: red;
  font-size: 12px;
`

export default Signup