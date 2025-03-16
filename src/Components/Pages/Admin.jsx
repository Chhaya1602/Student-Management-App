import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Admin = () => {
  const [username, setUsername] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()


  const handleAdmin = () =>{
    if(username === 'react' && password==='react@123'){
      alert('Login Successful !!!')
      navigate('/show')
    }else{
      alert('Wrong Username and Password')
      setUsername('')
      setPassword('')
    }
  }


  const enterKeyhandle = (event) =>{
    if(event.key === 'Enter'){
      handleAdmin()
    }
  }
  return (
    <div>
      <h2>ADMIN LOGIN PAGE</h2>
      <div className='bg-warning w-50 mx-auto p-4 text-center mt-5 rounded-4'>
          <input
            type='text'
            placeholder='Enter Username'
            className='form-control mb-3 p-3'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
          <input
            type='password'
            placeholder='Enter Password'
            className='form-control mb-3 p-3'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            onKeyDown={enterKeyhandle}
          />
          <button className='btn btn-success w-25'
          onClick={handleAdmin}
          >LOGIN</button>
      </div>
    </div>
  )
}


export default Admin
