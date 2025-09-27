import Button from 'react-bootstrap/Button';
import React from "react";
import Card from "react-bootstrap/Card";
import ManageJob from './ManageJob';
import { deleteJobAPI } from '../service/allApi';
import { toast } from 'react-toastify';

function JobCard({ job, setISjobAdded, setISjobUpdated }) {

  const handleDelete = async (id) => {
    try {
      const result = await deleteJobAPI(id);
      setISjobAdded(result);
      toast.error("job deleted")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className="shadow-sm border-0 mb-4" style={{ width: "100%" }}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Card.Title className="fw-bold text-primary">{job?.jobTitle}</Card.Title>
          <span className="badge bg-secondary">{job?.salary}</span>
        </div>
        <Card.Subtitle className="mb-1 text-muted">{job?.company}</Card.Subtitle>
        <Card.Subtitle className="mb-3 text-muted">{job?.location}</Card.Subtitle>
        <Card.Text className="text-dark" style={{ minHeight: "80px" }}>
          {job?.description}
        </Card.Text>
        <div className="d-flex justify-content-between mt-3">
          <ManageJob isEdit={true} jobId={job?.id} setISjobUpdated={setISjobUpdated} />
          <Button onClick={() => handleDelete(job?.id)} variant="outline-danger">
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default JobCard;
