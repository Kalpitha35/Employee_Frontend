import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { addEmpDetails } from '../services/allApi';

const Add = () => {
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [empStatus, setEmpStatus] = useState('');
  const [userDetails, setUserDetails] = useState({
    userName: '',
    emailId: '',
    status: '',
  });

  const userInputValidation = (inputTag) => {
    const { id, value } = inputTag;
    if (id === 'email') {
      setUserDetails({ ...userDetails, emailId: value });
      setIsEmailInvalid(!value.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/));
    }
  };

  const handleChange = (status) => {
    setEmpStatus(status);
    setUserDetails({ ...userDetails, status });
  };

  const addEmployeeDetails = async () => {
    const { userName, emailId, status } = userDetails;

    if (userName && emailId && status) {
      try {
        const response = await addEmpDetails(userDetails);
        if (response.status >= 200 && response.status < 300) {
          alert('Registration successfully Completed!');
          setUserDetails({ userName: '', emailId: '', status: '' });
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      alert('Please fill the form completely');
    }
  };

  const divStyle = {
    backgroundImage: `url(https://img.freepik.com/premium-photo/abstract-purple-navy-blue-futuristic-background_1264014-56095.jpg)`,
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <div style={divStyle} className="d-flex justify-content-center align-items-center">
      <div style={{ position: 'absolute', backgroundColor: 'white' }} className="d-flex justify-content-evenly align-items-center flex-column border rounded shadow p-5">
        <h3 className="m-3" style={{ color: 'black' }}>ADD EMPLOYEE DETAILS</h3>
        <Form.Floating className="mb-3">
          <Form.Control
            value={userDetails.userName}
            onChange={(e) => setUserDetails({ ...userDetails, userName: e.target.value })}
            id="uName"
            type="text"
            style={{ width: '400px' }}
            placeholder="Username"
          />
          <label style={{ color: 'black' }} htmlFor="floatingInputCustom">Username</label>
        </Form.Floating>
        <Form.Floating>
          <Form.Control
            value={userDetails.emailId}
            onChange={(e) => userInputValidation(e.target)}
            id="email"
            type="email"
            style={{ width: '400px' }}
            placeholder="Enter Email ID"
          />
          <label style={{ color: 'black' }} htmlFor="floatingPasswordCustom">Enter Your Email ID</label>
        </Form.Floating>
        {isEmailInvalid && <div className="text-danger fw-bolder">* Invalid Email Id</div>}
        <FloatingLabel className="mt-3" controlId="status" style={{ width: '400px', color: 'black' }} label="STATUS">
          <Form.Select value={empStatus} onChange={(e) => handleChange(e.target.value)} aria-label="Floating label select example">
            <option value="" disabled>Select Status</option>
            <option style={{ color: 'black' }} value="Active">Active</option>
            <option style={{ color: 'black' }} value="Inactive">Inactive</option>
          </Form.Select>
        </FloatingLabel>
        <div className="d-flex justify-content-evenly flex-row mt-3">
          <Link onClick={addEmployeeDetails} style={{ width: '200px', color: 'black' }} className="btn btn-warning me-2">ADD DETAILS</Link>
          <Link style={{ width: '200px', color: 'black' }} className="btn btn-warning" to="/home">HOME</Link>
        </div>
      </div>
    </div>
  );
};

export default Add;
