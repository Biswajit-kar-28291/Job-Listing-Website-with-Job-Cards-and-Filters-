import React, { useState } from "react";
import jobs from "../data/jobs";
import JobCard from "./JobCard";
import JobModal from "./JobModal";

function JobList() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <div className="row">
        {jobs.map((job) => (
          <div key={job.id} className="col-md-6 col-lg-4">
            <JobCard job={job} onView={setSelectedJob} />
          </div>
        ))}
      </div>

      {selectedJob && (
        <JobModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </>
  );
}

export default JobList;