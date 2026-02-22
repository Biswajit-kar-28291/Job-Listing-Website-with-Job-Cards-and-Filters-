import React, { useState } from "react";
import JobList from "./JobList";
import Filter from "./Filter";
import jobsData from "../data/jobs";

function Layout() {

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [experience, setExperience] = useState("");

  const filteredJobs = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (location === "" || job.location === location) &&
      (category === "" || job.category === category) &&
      (experience === "" || job.experience === experience)
    );
  });

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
          <JobList jobs={filteredJobs} />
        </div>

      </div>
    </div>
  );
}

export default Layout;