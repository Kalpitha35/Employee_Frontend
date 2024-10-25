import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {

    const divStyle = {
        backgroundImage: `url(https://wallpapercave.com/wp/wp7728220.jpg)`,
        minHeight: "100vh",
    }
  return (
    <>

    <div style={divStyle}  className="d-flex justify-content-evenly  flex-column">
            <h1 style={{color:'black',textAlign:'center',marginTop:'-30px',fontSize:'50px'}}>Employee Management Portal</h1>

        <div style={{width:'500px',height:'200px',marginLeft:'370px',marginTop:'-50px'}} className='d-flex flex-row justify-content-center align-items-center border rounded shadow bg-white  '>
            <Link to={'/add'} className='btn btn-warning me-4' style={{color:'black',height:'50px',width:'200px'}}>ADD EMPLOYEE</Link>
    
            <Link to={'/home'} className='btn btn-warning' style={{color:'black',height:'50px',width:'200px'}}>HOME</Link>
        </div>

    </div>

    {/* <img className='m-5' width={'1200px'} height={'400px'} src="https://wallpapercave.com/wp/wp7728220.jpg" alt="" /> */}
    </>
  )
}

export default Landing