import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Counter</Link>
        <Link to="/TodoApp">Todo</Link>
    </div>
  )
}

export default Navbar