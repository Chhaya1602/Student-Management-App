import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
const Show = () => {


    const [students, setStudents] = useState([])
    const [searchName, setsearchName] = useState('')
    async function getData() {
        const response = await axios.get('http://localhost:8000/students')
        console.log(response)
        const result = response.data
        console.log(result)
        setStudents(result)
    }


    useEffect(() => {
        getData()
    }, [])


   
    const searchStudentname = students.filter((stu)=>{
        return stu.fname.toLowerCase().includes(searchName.toLowerCase()) || stu.lname.toLowerCase().includes(searchName.toLowerCase())
    })
    return (
        <div>
            <h2>Students Details - </h2>
            <div className='w-50 mx-auto mt-4 mb-4'>
                <input
                    type='text'
                    className='form-control'
                    value={searchName}
                    onChange={(e)=>setsearchName(e.target.value)}/>
            </div>
            <div className='btn btn-warning'>
                {searchName}
            </div>


            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Mother Name</th>
                        <th>Father Name</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>State</th>
                        <th>City</th>
                        <th>DOB</th>
                        <th>Pincode</th>
                        <th>Passowrd</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        searchStudentname.map((stu, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{stu.fname} </td>
                                    <td>{stu.lname}</td>
                                    <td>{stu.mother_name}</td>
                                    <td>{stu.father_name}</td>
                                    <td>{stu.address}</td>
                                    <td>{stu.gender}</td>
                                    <td>{stu.state}</td>
                                    <td>{stu.city}</td>
                                    <td>{stu.dob}</td>
                                    <td>{stu.pincode}</td>
                                    <td>{stu.password}</td>
                                    <td>{stu.email}</td>
                                    <td>
                                        <NavLink to={`/update/student/${stu.id}`}><button className='btn btn-warning me-3'>Edit</button></NavLink>
                                        <NavLink to={`/delete/student/${stu.id}`}><button className='btn btn-danger'>Delete</button></NavLink>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className='text-center'>
                <NavLink to='/register'><button className='btn btn-success'>ADD DATA</button></NavLink>
            </div>
        </div>
    )
}


export default Show