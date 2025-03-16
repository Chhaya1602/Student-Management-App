const StudentDetails = ({onLogout, student}) =>{
    return(
        <>
            <h2 className="mb-4 mt-4 w-50 mx-auto bg-dark text-info rounded-5 p-4">Student Details - {student.fname} {student.lname}</h2>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Roll No</th>
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
                            <th>Password</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{student.id}</td>
                            <td>{student.fname}</td>
                            <td>{student.lname}</td>
                            <td>{student.mother_name}</td>
                            <td>{student.father_name}</td>
                            <td>{student.address}</td>
                            <td>{student.gender}</td>
                            <td>{student.state}</td>
                            <td>{student.city}</td>
                            <td>{student.dob}</td>
                            <td>{student.pincode}</td>
                            <td>{student.password}</td>
                            <td>{student.email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className="btn btn-danger" onClick={onLogout}>LogOut</button>
        </>
    )
}
export default StudentDetails
