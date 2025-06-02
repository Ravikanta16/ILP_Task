import React from "react";

function Filter({ setFilter }) {
  const eventTypes = [
    "All",
    "PushEvent",
    "WatchEvent",
    "ForkEvent",
    "IssuesEvent",
    "PullRequestEvent"
  ];

  return (
    <div className="filter">
      <label className="filter-label">Filter by type: </label>
      <select
        id="filter"
        onChange={(e) => setFilter(e.target.value)}
      >
        {eventTypes.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;