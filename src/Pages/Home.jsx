import React from "react";
import {  useNavigate } from "react-router-dom";

function Home() {
    const navigate=useNavigate()
  return (
    <>
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-3"></div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div className="text-center p-4 border rounded shadow-sm w-100">
            <h1 className="mb-3">Job Portal</h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              repellendus labore, voluptatem iure atque ad aperiam illo vitae
              sapiente ipsam, officiis suscipit ullam! Beatae, natus.
            </p>
            <button onClick={()=>navigate("/dashboard")} className="btn btn-primary">Manage Job</button>
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </>
  );
}

export default Home;
