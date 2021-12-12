import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Login() {
  const [error, setError] = useState(null)

  function handleSubmit(event) {
    // TODO: update to handle login and redirect to profile
    event.preventdefault()
  }

  return (
    <div id="loginPage">
      <h2>Login</h2>
      <hr />
      <form onSubmit={handleSubmit} >
        {error !== null ? <div className="errorText">{error}</div> : ""}
        <input type="email" placeholder="Enter Your Email" className="txtBox" required />
        <input type="password" placeholder="Enter Your Password" className="txtBox" required />
        <button type="submit" >Login</button>
        <div className="oneLine">No Account? <Link to="/Register">Register</Link></div>
        <div className="oneLine">Forgot your password? <Link to="pwReset">Reset Password</Link></div>
      </form>
    </div>
  )
}
 