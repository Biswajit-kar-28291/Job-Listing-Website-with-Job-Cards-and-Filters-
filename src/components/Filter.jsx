import React from "react";

function Filter() {
  return (
    <div className="card shadow-sm">
      <div className="card-body">

        <h5 className="fw-bold mb-3">Filter Jobs</h5>

        {/* Search */}
        <div className="mb-3">
          <label className="form-label">Search by Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter job title"
          />
        </div>

        {/* Location */}
        <div className="mb-3">
          <label className="form-label">Location</label>
          <select className="form-select">
            <option value="">All Locations</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Bangalore</option>
          </select>
        </div>

        {/* Category */}
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select className="form-select">
            <option value="">All Categories</option>
            <option>IT</option>
            <option>Marketing</option>
            <option>Design</option>
          </select>
        </div>

        {/* Experience */}
        <div className="mb-3">
          <label className="form-label">Experience Level</label>
          <select className="form-select">
            <option value="">All Levels</option>
            <option>Fresher</option>
            <option>Mid-Level</option>
            <option>Senior</option>
          </select>
        </div>

        {/* Reset Button */}
        <div className="d-grid">
          <button className="btn btn-outline-danger">
            Reset Filters
          </button>
        </div>

      </div>
    </div>
  );
}

export default Filter;