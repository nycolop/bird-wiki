import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Register() {
  const [error, setError] = useState(null)

  function handleSubmit(event) {
    // TODO: update to handle password check and redirect to profile page
    event.preventDefault()
  }

  return (
    <div id="registerPage">
      <h2>Register</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        {error !== null ? <div className="errorText">{error}</div> : ""}
        <input type="text" placeholder="Enter A Username" className="txtBox" required />
        <input type="email" placeholder="Enter Your Email" className="txtBox" required />
        <input type="password" placeholder="Enter Your Password" className="txtBox" required/>
        <input type="password" placeholder="Re-Enter Your Password" className="txtBox" required/>
        <button type="submit" >Register</button>
        <div className="oneLine">Already have an account? <Link to="/login">Go To Login</Link></div>
      </form>
    </div>
  )
}
