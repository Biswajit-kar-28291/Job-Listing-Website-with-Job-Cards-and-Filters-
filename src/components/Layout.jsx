import React, { useState, useEffect } from "react";
import jobsData from "../data/jobs";
import Filter from "./Filter";
import JobList from "./JobList";

function Layout() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [experience, setExperience] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  // 🔎 Filtering
  let filteredJobs = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (location === "" || job.location === location) &&
      (category === "" || job.category === category) &&
      (experience === "" || job.experience === experience)
    );
  });

  // 🔄 Sorting
  if (sortOrder === "low-high") {
    filteredJobs.sort(
      (a, b) => parseInt(a.salary) - parseInt(b.salary)
    );
  } else if (sortOrder === "high-low") {
    filteredJobs.sort(
      (a, b) => parseInt(b.salary) - parseInt(a.salary)
    );
  }

  // 🔁 Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, location, category, experience, sortOrder]);

  const indexOfLast = currentPage * jobsPerPage;
  const indexOfFirst = indexOfLast - jobsPerPage;
  const currentJobs = filteredJobs.slice(
    indexOfFirst,
    indexOfLast
  );

  const totalPages = Math.ceil(
    filteredJobs.length / jobsPerPage
  );

  // 🔁 Reset Filters
  const resetFilters = () => {
    setSearch("");
    setLocation("");
    setCategory("");
    setExperience("");
    setSortOrder("");
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
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            resetFilters={resetFilters}
          />
        </div>

        <div className="col-md-9">
          <JobList jobs={currentJobs} />

          {totalPages > 1 && (
            <ul className="pagination justify-content-center mt-4">
              {[...Array(totalPages)].map((_, i) => (
                <li
                  key={i}
                  className={`page-item ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() =>
                      setCurrentPage(i + 1)
                    }
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Layout;