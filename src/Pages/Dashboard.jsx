import React, { useEffect, useState } from "react";
import JobCard from "../Copmonents/JobCard";
import ManageJob from "../Copmonents/ManageJob";
import { getAllJobDataAPI } from "../service/allApi";

function Dashboard() {
  const [jobData, setJobData] = useState([]);
  const [isjobAdded, setISjobAdded] = useState();
  const [isjobUpdated, setISjobUpdated] = useState();

  const getAllJobs = async () => {
    try {
      const result = await getAllJobDataAPI();
      setJobData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllJobs();
  }, [isjobAdded, isjobUpdated]);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary">Job Dashboard</h2>
        <ManageJob setISjobAdded={setISjobAdded} />
      </div>

      {jobData?.length > 0 ? (
        <div className="row g-4">
          {jobData.map((job) => (
            <div className="col-md-6 col-lg-4" key={job.id}>
              <JobCard
                job={job}
                setISjobAdded={setISjobAdded}
                setISjobUpdated={setISjobUpdated}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-muted mt-5">
          <p>No jobs found. Try adding one!</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
