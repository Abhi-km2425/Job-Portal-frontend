import Button from 'react-bootstrap/Button';
import React from "react";
import Card from "react-bootstrap/Card";
import ManageJob from './ManageJob';
import { deleteJobAPI } from '../service/allApi';

function JobCard({job,setISjobAdded,setISjobUpdated}) {

const handleDelete=async(id)=>{
  console.log(id);

  try {
    const result=await deleteJobAPI(id)
    console.log(result);
    setISjobAdded(result)
    
  } catch (error) {
    console.log(error);
    
    
  }
  

}

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{job?.jobTitile}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{job?.company}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{job?.location}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{job?.salary}</Card.Subtitle>

        <Card.Text>
         {job?.description}
        </Card.Text>
        <div className="d-flex justify-content-around">
            <ManageJob isEdit={true} jobId={job?.id} setISjobUpdated={setISjobUpdated}/>
            <Button onClick={()=>handleDelete(job?.id)} variant="danger">Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
