import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ActivityList from "./ActivityList";
import Filter from "./Filter";

const Home = () => {

  const [username, setUsername] = useState("");
  const [activity, setActivity] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("history")) || [];
    setSearchHistory(history);
  }, []);

  useEffect(() => {
    if (username) {
      fetch(`https://api.github.com/users/${username}/events`)
        .then((res) => res.json())
        .then((data) => {
          setActivity(data);
          const history = JSON.parse(localStorage.getItem("history")) || [];
          if (!history.includes(username)) {
            const updatedHistory = [...history, username];
            setSearchHistory(updatedHistory);
            localStorage.setItem("history", JSON.stringify(updatedHistory));
          }
        })
        .catch((err) => {
          console.error("Error fetching activity:", err);
          setActivity([]);
        });
    }
  }, [username]);

  const filteredActivity =
    filter === "All"
      ? activity
      : activity.filter((event) => event.type === filter);

  return (
    <div className="home">
      <h1 className="title">GitHub Activity</h1>
      <SearchBar
        onSearch={setUsername}
        searchHistory={searchHistory}
      />
      <Filter setFilter={setFilter} />
      <ActivityList activity={filteredActivity} />
    </div>
  );
}

export default Home;