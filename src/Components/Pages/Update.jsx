import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  const { register, handleSubmit, setValue } = useForm()
  const [cities, setCities] = useState([])
  const { studentID } = useParams()
  const navigate = useNavigate()

  const cityData = {
    Maharashtra: ['Pune', 'Mumbai', 'Nashik', 'Nagpur'],
    Gujrat: ['Surat', 'Jamnagar', 'Ahemadabad'],
    Rajasthan: ['Jaipur', 'Bikaner', 'Udaipur'],
    UP: ['Kanpur', 'Mirzapur']
  }

  const handleState = (e) => {
    const selectedState = e.target.value
    setCities(cityData[selectedState] || [])
  }

  const getData = useCallback(async () => {
    try {
      const result = await axios.get(`http://localhost:8000/students/${studentID}`)
      const studentData = result.data
      Object.keys(studentData).forEach((key) => setValue(key, studentData[key]))
    } catch (error) {
      console.error('Error fetching student data:', error)
    }
  }, [studentID, setValue])

  useEffect(() => {
    getData()
  }, [getData])

  const updateData = async (data) => {
    try {
      await axios.put(`http://localhost:8000/students/${studentID}`, data)
      alert('Data Updated')
      navigate('/show')
    } catch (error) {
      console.error('Error updating student data:', error)
    }
  }

  return (
    <div>
      <h2>Students Profile</h2>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                      alt="Sample" className="img-fluid myimage" />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <form onSubmit={handleSubmit(updateData)}>
                        <h3 className="mb-5 text-uppercase">Student registration form</h3>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input type="text" className="form-control form-control-lg" {...register('fname')} required />
                              <label className="form-label">First name</label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input type="text" className="form-control form-control-lg" {...register('lname')} required />
                              <label className="form-label">Last name</label>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <select className='w-100 p-2' {...register('state')} onChange={handleState}>
                              <option value="">State</option>
                              {Object.keys(cityData).map((state, index) => (
                                <option key={index} value={state}>{state}</option>
                              ))}
                            </select>
                          </div>
                          <div className="col-md-6 mb-4">
                            <select className='w-100 p-2' {...register('city')}>
                              <option value="">City</option>
                              {cities.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end pt-3">
                          <button type="reset" className="btn btn-light btn-lg">Reset all</button>
                          <button type="submit" className="btn btn-warning btn-lg ms-2">Update form</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Update
