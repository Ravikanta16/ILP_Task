import React from "react";

function ActivityList({ activity }) {
  if (!activity || activity.length === 0) {
    return <p>No activity found.</p>;
  }

  return (
    <div className="activity-list">
      {activity.map((event) => (
        <div key={event.id} className="activity-item">
          <p><strong>Type:</strong> {event.type}</p>
          <p><strong>Repo:</strong> {event.repo.name}</p>
          <p><strong>Date:</strong> {new Date(event.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default ActivityList;