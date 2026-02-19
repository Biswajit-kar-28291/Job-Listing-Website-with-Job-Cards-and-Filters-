import React from "react";

function JobCard({ job }) {
  return (
    <div className="card shadow-sm mb-3 h-100">
      <div className="card-body">
        <h5 className="card-title text-primary fw-bold">
          {job.title}
        </h5>

        <p className="mb-1">
          <strong>Company:</strong> {job.company}
        </p>

        <p className="mb-1">
          <strong>Location:</strong> {job.location}
        </p>

        <p className="mb-1">
          <strong>Experience:</strong> {job.experience}
        </p>

        <span className="badge bg-secondary mb-3">
          {job.category}
        </span>

        <div>
          <button className="btn btn-outline-primary btn-sm">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
