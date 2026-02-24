import React, { useState, useEffect } from "react";
import JobList from "./JobList";
import Filter from "./Filter";
import jobsData from "../data/jobs";

function Layout() {

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [experience, setExperience] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  const filteredJobs = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (location === "" || job.location === location) &&
      (category === "" || job.category === category) &&
      (experience === "" || job.experience === experience)
    );
  });

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, location, category, experience]);

  // Pagination Logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const resetFilters = () => {
    setSearch("");
    setLocation("");
    setCategory("");
    setExperience("");
  };

  return (
    <div className="container mt-4">
      <div className="row">

        <div className="col-md-3 mb-3">
          <Filter
            search={search}
            setSearch={setSearch}
            location={location}
            setLocation={setLocation}
            category={category}
            setCategory={setCategory}
            experience={experience}
            setExperience={setExperience}
            resetFilters={resetFilters}
          />
        </div>

        <div className="col-md-9">
          <h4 className="mb-3 fw-bold">Available Jobs</h4>
          <JobList jobs={currentJobs} />

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="mt-4">
              <ul className="pagination justify-content-center">

                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Previous
                  </button>
                </li>

                {[...Array(totalPages)].map((_, index) => (
                  <li
                    key={index}
                    className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}

                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next
                  </button>
                </li>

              </ul>
            </nav>
          )}

        </div>

      </div>
    </div>
  );
}

export default Layout;