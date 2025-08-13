import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  addJobDataAPI,
  geteditJobDataAPI,
  updateditJobDataAPI,
} from "../service/allApi";

function ManageJob({ isEdit, setISjobAdded, jobId, setISjobUpdated }) {
  console.log(jobId);

  const [jobData, setJobData] = useState({
    jobTitle: "",
    company: "",
    location: "",
    salary: "",
    description: "",
  });

  //post api call for data sent
  const handleAddJob = async () => {
    const { jobTitle, company, location, salary, description } = jobData;
    
    console.log(jobTitle, company, location, salary, description);
    if (!jobTitle || !company || !location || !salary || !description) {
      alert("fill the data");
    } else {
      try {
        const result = await addJobDataAPI(jobData);
        console.log(result);
        setISjobAdded(result);
        handleClose();
      } catch (error) {
        console.log(error);
      }
    }
  };

  //get and edit and console
  const editJobData = async () => {
    try {
      const result = await geteditJobDataAPI(jobId);
      console.log(result);
      setJobData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  //update job data
  const handleUpdateJob = async () => {
    const { jobTitle, company, location, salary, description } = jobData;
    console.log(jobTitle, company, location, salary, description);
    if (!jobTitle || !company || !location || !salary || !description) {
      alert("fill the data");
    } else {
      try {
        const result = await updateditJobDataAPI(jobId, jobData);
        console.log(result);
        handleClose();
        setISjobUpdated(result);
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log(jobData);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    //edit data modalshow
    if(isEdit && jobId){
      await  editJobData();

    }
    setShow(true);
  };
  return (
    <>
      {isEdit ? (
        <Button variant="primary" onClick={handleShow}>
          EditJob
        </Button>
      ) : (
        <Button variant="primary" onClick={handleShow}>
          AddJob
        </Button>
      )}

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          {isEdit ? (
            <Modal.Title>EDIT JOB</Modal.Title>
          ) : (
            <Modal.Title>Add Job</Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>Job title</label>
            <input
              value={jobData.jobTitle}
              onChange={(e) =>
                setJobData({ ...jobData, jobTitle: e.target.value })
              }
              type="text"
              name=""
              id=""
              placeholder="Job title"
              className="form-control m-2"
            />
          </div>
          <div>
            <label>Company Name</label>
            <input
              value={jobData.company}
              onChange={(e) =>
                setJobData({ ...jobData, company: e.target.value })
              }
              type="text"
              name=""
              id=""
              placeholder="Company Name"
              className="form-control m-2"
            />
          </div>
          <div>
            <label>LOcation</label>
            <input
              value={jobData.location}
              onChange={(e) =>
                setJobData({ ...jobData, location: e.target.value })
              }
              type="text"
              name=""
              id=""
              placeholder="Location"
              className="form-control m-2"
            />
          </div>
          <div>
            <label>Salary</label>
            <input
              value={jobData.salary}
              onChange={(e) =>
                setJobData({ ...jobData, salary: e.target.value })
              }
              type="text"
              name=""
              id=""
              placeholder="salary"
              className="form-control m-2"
            />
          </div>
          <div>
            <label>Job Description</label>
            <textarea
              value={jobData.description}
              onChange={(e) =>
                setJobData({ ...jobData, description: e.target.value })
              }
              type="textarea"
              name=""
              id=""
              placeholder="enter your Job Description"
              className="form-control m-2"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Clear
          </Button>
          {isEdit ? (
            <Button variant="primary" onClick={handleUpdateJob}>
              Update
            </Button>
          ) : (
            <Button onClick={handleAddJob} variant="primary">
              AddJob
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ManageJob;
