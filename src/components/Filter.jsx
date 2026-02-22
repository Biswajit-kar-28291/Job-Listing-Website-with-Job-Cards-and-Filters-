import React from "react";

function Filter({
  search,
  setSearch,
  location,
  setLocation,
  category,
  setCategory,
  experience,
  setExperience,
  resetFilters
}) {
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Location */}
        <div className="mb-3">
          <label className="form-label">Location</label>
          <select
            className="form-select"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangalore">Bangalore</option>
          </select>
        </div>

        {/* Category */}
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="IT">IT</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        {/* Experience */}
        <div className="mb-3">
          <label className="form-label">Experience Level</label>
          <select
            className="form-select"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
            <option value="">All Levels</option>
            <option value="Fresher">Fresher</option>
            <option value="Mid-Level">Mid-Level</option>
            <option value="Senior">Senior</option>
          </select>
        </div>

        {/* Reset */}
        <div className="d-grid">
          <button
            className="btn btn-outline-danger"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </div>

      </div>
    </div>
  );
}

export default Filter;