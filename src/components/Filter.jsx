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
  sortOrder,
  setSortOrder,
  resetFilters,
}) {
  return (
    <div className="card p-3 shadow-sm">
      <h5 className="fw-bold mb-3">Filters</h5>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search title..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <select
        className="form-select mb-3"
        value={location}
        onChange={(e) =>
          setLocation(e.target.value)
        }
      >
        <option value="">
          All Locations
        </option>
        <option>Mumbai</option>
        <option>Delhi</option>
        <option>Bangalore</option>
      </select>

      <select
        className="form-select mb-3"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option value="">
          All Categories
        </option>
        <option>IT</option>
        <option>Design</option>
        <option>Marketing</option>
      </select>

      <select
        className="form-select mb-3"
        value={experience}
        onChange={(e) =>
          setExperience(e.target.value)
        }
      >
        <option value="">
          All Experience
        </option>
        <option>Fresher</option>
        <option>Mid-Level</option>
        <option>Senior</option>
      </select>

      {/* 🔄 Salary Sorting */}
      <select
        className="form-select mb-3"
        value={sortOrder}
        onChange={(e) =>
          setSortOrder(e.target.value)
        }
      >
        <option value="">
          Sort by Salary
        </option>
        <option value="low-high">
          Low to High
        </option>
        <option value="high-low">
          High to Low
        </option>
      </select>

      <button
        className="btn btn-outline-danger w-100"
        onClick={resetFilters}
      >
        Reset Filters
      </button>
    </div>
  );
}

export default Filter;