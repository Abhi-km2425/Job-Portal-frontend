import React, { useEffect, useState } from "react";
import JobCard from "../Copmonents/JobCard";
import ManageJob from "../Copmonents/ManageJob";
import { getAllJobDataAPI } from "../service/allApi";

function Dashboard() {
  const [jobData, setJobData] = useState([]);

  const [isjobAdded, setISjobAdded] = useState();

  //update stata
    const [isjobUpdated, setISjobUpdated] = useState();

//get job data
  const getAllJobs = async () => {
    try {
      const result = await getAllJobDataAPI();
      console.log(result);
      setJobData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(jobData);

  useEffect(() => {
    getAllJobs();
  }, [isjobAdded,isjobUpdated]);

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between">
          <h1>Dashboard</h1>
          <ManageJob setISjobAdded={setISjobAdded} />
        </div>
        <div className="row">
          <div className="row-mt-5">
            {jobData?.length > 0 ? (
              <div className="row">
                {jobData.map((job) => (
                  <div className="col-4">
                    <JobCard setISjobAdded={setISjobAdded} job={job} setISjobUpdated={setISjobUpdated} />
                  </div>
                ))}
              </div>
            ) : (
              <p>No jobs found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
