import { React, useState } from "react"
import {useHistory} from "react-router-dom"
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

function Login({ setUser }) {
  const history = useHistory()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user)).then(() => {return history.push("/dashboard")})
      } else {
        r.json().then((err) => console.log(err.errors))
      }
    }) 
  }

return (
  <MainLoginCont>
    <LoginCont>
      <CenterCont>
        <Image src="https://i.ibb.co/fXCYgsW/Busy-Bee-1.png"/>
        <LoginForm onSubmit={handleSubmit}>
          <LoginInput 
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LoginInput
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
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

export default Login