import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <Link to="/">
        <button>Log Out </button>
      </Link>
    </div>
  )
}

export default Profile
