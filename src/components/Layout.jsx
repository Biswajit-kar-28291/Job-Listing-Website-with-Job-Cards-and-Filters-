import React from "react";

function Layout() {
  return (
    <div className="container mt-4">
      <div className="row">

        {/* Sidebar */}
        <div className="col-md-3 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="fw-bold mb-3">Filters</h5>
              <p>Filter options will come here.</p>
            </div>
          </div>
        </div>

        {/* Job Section */}
        <div className="col-md-9">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="fw-bold mb-3">Job Listings</h5>
              <p>Job cards will display here.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Layout;
