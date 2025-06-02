import React, { useState } from "react";

function SearchBar({ onSearch, searchHistory }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() !== "") {
      onSearch(input.trim());
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        list="history"
        placeholder="Enter GitHub username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <datalist id="history">
        {searchHistory.map((user, idx) => (
          <option key={idx} value={user} />
        ))}
      </datalist>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;