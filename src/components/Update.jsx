import { useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link, useParams } from 'react-router-dom';
import { getSingleEmployeeAPI, updateEmployeeDetailsAPI } from '../services/allApi';

const Update = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [empDetails, setEmpDetails] = useState({
    userName: '',
    emailId: '',
    status: '',
  });

  useEffect(() => {
    if (id) {
      getSingleEmployee(id);
    }
  }, [id]);

  const userInputValidation = (inputTag) => {
    const { id, value } = inputTag;
    if (id === 'email') {
      setEmpDetails({ ...empDetails, emailId: value });
      setIsEmailInvalid(!value.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/));
    }
  };

  const handleChange = (status) => {
    setEmpDetails({ ...empDetails, status });
  };

  const getSingleEmployee = async (id) => {
    try {
      const response = await getSingleEmployeeAPI(id);
      setEmpDetails(response.data);
    } catch (error) {
      console.error("Error fetching employee details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateEmpDetails = async () => {
    const { userName, emailId, status } = empDetails;
    
    if (userName && emailId && status && !isEmailInvalid) {
      try {
        await updateEmployeeDetailsAPI(id, empDetails);
        alert("Update successfully completed!");
      } catch (error) {
        console.error("Error updating employee details:", error);
        alert("An error occurred. Please try again.");
      }
    } else {
      alert("Please fill in all required fields correctly!");
    }
  };

  return (
    <>
      <div style={{ marginTop: '300px' }} className="d-flex justify-content-center align-items-center">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div
            style={{ position: 'absolute', backgroundColor: 'white' }}
            className="d-flex justify-content-evenly align-items-center flex-column border rounded shadow p-5"
          >
            <h3 className="m-3" style={{ color: 'black' }}>UPDATE YOUR DETAILS</h3>

            <Form.Floating className="mb-3">
              <Form.Control
                value={empDetails.userName}
                onChange={(e) => setEmpDetails({ ...empDetails, userName: e.target.value })}
                id="uName"
                type="text"
                style={{ width: '400px' }}
                placeholder="Username"
              />
              <label style={{ color: 'black' }} htmlFor="uName">Username</label>
            </Form.Floating>
            
            <Form.Floating>
              <Form.Control
                value={empDetails.emailId}
                onChange={(e) => userInputValidation(e.target)}
                id="email"
                type="email"
                style={{ width: '400px' }}
                placeholder="Enter Email ID"
              />
              <label style={{ color: 'black' }} htmlFor="email">Enter Your Email ID</label>
            </Form.Floating>
            {isEmailInvalid && <div className="text-danger fw-bolder">* Invalid Email Id</div>}

            <FloatingLabel className="mt-3" controlId="status" style={{ width: '400px', color: 'black' }} label="STATUS">
              <Form.Select
                value={empDetails.status}
                onChange={(e) => handleChange(e.target.value)}
                aria-label="Floating label select example"
              >
                <option value="" disabled>Select Status</option>
                <option style={{ color: 'black' }} value="Active">Active</option>
                <option style={{ color: 'black' }} value="Inactive">Inactive</option>
              </Form.Select>
            </FloatingLabel>

            <div className="d-flex justify-content-evenly flex-row mt-3">
              <Link style={{ width: '200px', color: 'black' }} className="btn btn-warning me-2" onClick={updateEmpDetails}>
                UPDATE DETAILS
              </Link>
              <Link style={{ width: '200px', color: 'black' }} className="btn btn-warning" to="/home">HOME</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Update;
