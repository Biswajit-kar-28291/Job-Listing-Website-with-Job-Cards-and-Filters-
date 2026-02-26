import React, {
  useState,
  useEffect,
} from "react";

function JobCard({ job, onView }) {
  const [saved, setSaved] =
    useState(false);

  useEffect(() => {
    const savedJobs =
      JSON.parse(
        localStorage.getItem(
          "savedJobs"
        )
      ) || [];
    setSaved(
      savedJobs.includes(job.id)
    );
  }, [job.id]);

  const toggleSave = () => {
    let savedJobs =
      JSON.parse(
        localStorage.getItem(
          "savedJobs"
        )
      ) || [];

    if (
      savedJobs.includes(job.id)
    ) {
      savedJobs = savedJobs.filter(
        (id) => id !== job.id
      );
      setSaved(false);
    } else {
      savedJobs.push(job.id);
      setSaved(true);
    }

    localStorage.setItem(
      "savedJobs",
      JSON.stringify(savedJobs)
    );
  };

  return (
    <div className="card shadow-sm mb-3 h-100">
      <div className="card-body">
        <h5 className="text-primary fw-bold">
          {job.title}
        </h5>

        <p>
          <strong>
            {job.company}
          </strong>
        </p>
        <p>{job.location}</p>
        <p>
          Salary: {job.salary}
        </p>

        <div className="d-flex justify-content-between">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() =>
              onView(job)
            }
          >
            View
          </button>

          <button
            className={`btn btn-sm ${
              saved
                ? "btn-success"
                : "btn-outline-success"
            }`}
            onClick={toggleSave}
          >
            {saved
              ? "✓ Saved"
              : "♡ Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;