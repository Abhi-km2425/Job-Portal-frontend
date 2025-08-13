
import {commonApi} from './commonApi'
import {serverURL} from './serverURL'


//adddjob
export const addJobDataAPI=async(reqbody)=>{
    return await commonApi("POST",`${serverURL}/jobs`,reqbody)
}

//api to get all jobdata

export const getAllJobDataAPI=async()=>{
    return await commonApi("GET",`${serverURL}/jobs`,"")
}

//delete api,pass id as path parameter
export const deleteJobAPI=async(id)=>{
    return await commonApi('DELETE',`${serverURL}/jobs/${id}`,"")
}


//edit job data 
export const geteditJobDataAPI=async(id)=>{
    return await commonApi ('GET',`${serverURL}/jobs/${id}`)
}

//api to update the edited job data 
export const updateditJobDataAPI=async(id,reqbody)=>{
    return await commonApi ('PUT',`${serverURL}/jobs/${id}`,reqbody)
}
