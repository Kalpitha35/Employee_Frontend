import commonAPI from "./commonApi"
import SERVER_URL from "./serverUrl"

// upload EmployeeDetails 
export const addEmpDetails = async (details)=>{
    return await commonAPI("POST",`${SERVER_URL}/employeeDetails`,details)
}

//  getEmpdetailsAPI api 
export const getEmpdetailsAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/employeeDetails`,"")
}

// removeVideoAPI - called by VideoCard
export const deleteEmpDetailsAPI = async (empId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/employeeDetails/${empId}`,{})
}

export const getSingleEmployeeAPI = async(empId)=>{
    return await commonAPI("GET",`${SERVER_URL}/employeeDetails/${empId}`,'')
}

export const updateEmployeeDetailsAPI = async(empId,updatedDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/employeeDetails/${empId}`,updatedDetails)
}

