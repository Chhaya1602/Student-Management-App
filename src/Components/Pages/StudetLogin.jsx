import axios from 'axios'
import React, { useState } from 'react'
import StudentDetails from './StudentDetails'


const StudentLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //Login Comp state manage
    const [loggedIn, setloggedIn] = useState()


    async function handleLogIn () {
        const response = await axios.get('http://localhost:8000/students')
        const result = response.data
        //console.log(result)
        const student = result.find((stu)=>stu.email === email && stu.password === password)


        if(student){
            setloggedIn(student)
            alert('Login Successful !!!')
        }else{
            alert('Wrong Username and Password')
            setEmail('')
            setPassword('')
        }
    }


    const handleLogOut = () =>{
        setloggedIn()
        setEmail('')
        setPassword('')
    }
    if(loggedIn){
        return <StudentDetails student={loggedIn} onLogout={handleLogOut}/>
    }
  return (
    <div>
        <h2>Student Login Page</h2>
        <div className='w-50 bg-warning p-3 rounded-4 mx-auto mt-5 text-center'>
            <input
                type='email'
                className='form-control mb-3'
                placeholder='Enter Email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <input
                type='password'
                className='form-control mb-3'
                placeholder='Enter Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <button className='btn btn-success' onClick={handleLogIn}>LOGIN</button>
        </div>
    </div>
  )
}


export default StudentLogin
