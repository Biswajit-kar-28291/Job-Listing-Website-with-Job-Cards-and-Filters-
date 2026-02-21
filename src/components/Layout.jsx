import React from "react";
import JobList from "./JobList";
import Filter from "./Filter";

function Layout() {
  return (
    <div className="container mt-4">
      <div className="row">

        {/* Sidebar Filter */}
        <div className="col-md-3 mb-3">
          <Filter />
        </div>

        {/* Job Section */}
        <div className="col-md-9">
          <h4 className="mb-3 fw-bold">Available Jobs</h4>
          <JobList />
        </div>

      </div>
    </div>
  );
}

export default Layout;