import { React, useState } from "react"
import Login from './Login.js'
import Signup from './Signup.js'

function LoginForm({setUser}){
  const [showLogin, setShowLogin] = useState(true)

  return (
    <>
     {showLogin ? (  
        <Login setUser={setUser} setShowLogin={setShowLogin} />
      ) : (
        <Signup setUser={setUser} setShowLogin={setShowLogin} />
      )} 
    </>
  )
}

export default LoginForm