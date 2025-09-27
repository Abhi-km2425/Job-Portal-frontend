import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid bg-light" style={{ height: "100vh" }}>
      <div className="row h-100">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start px-5">
          <h1 className="display-4 fw-bold text-primary mb-3">Welcome to Job Portal</h1>
          <p className="lead text-muted mb-4">
            Discover opportunities, manage listings, and build your career—all in one place.
            Whether you're hiring or applying, we've got you covered.
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="btn btn-outline-primary btn-lg"
          >
            Go to Dashboard
          </button>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center bg-white">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Job Portal Illustration"
            className="img-fluid"
            style={{ maxHeight: "300px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
