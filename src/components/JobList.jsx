import React, { useState } from "react";
import JobCard from "./JobCard";
import JobModal from "./JobModal";

function JobList({ jobs }) {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <div className="row">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id} className="col-md-6 col-lg-4">
              <JobCard job={job} onView={setSelectedJob} />
            </div>
          ))
        ) : (
          <p className="text-danger">No jobs found.</p>
        )}
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