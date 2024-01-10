import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const ToForm = ({ addTodo }) => {
  const [value, setvalue] = useState("")

  const handlesubmit = e => {
    e.preventDefault()
    if (value === '') {
      alert('Please enter a valid todo')
      return
    };
    e.preventDefault();


    addTodo(value)

    setvalue("")
  }
  return (
    <form className='TodoForm' onSubmit={handlesubmit}>
      <input type="text" className='todo-input' value={value}
        placeholder='what is the task today?' onChange={(e) => setvalue(e.target.value)} />
      <button type='submit' className='todo-btn'>add task</button>
      <div className='link'><Link to='/LoginSignup'>SignUp</Link></div>
    </form>
  )
}
