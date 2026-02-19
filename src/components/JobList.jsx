import React from "react";
import jobs from "../data/jobs";
import JobCard from "./JobCard";

function JobList() {
  return (
    <div className="row">
      {jobs.map((job) => (
        <div key={job.id} className="col-md-6 col-lg-4">
          <JobCard job={job} />
        </div>
      ))}
    </div>
  );
}

export default JobList;
