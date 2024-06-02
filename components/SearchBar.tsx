"use client";

import { useState } from "react";

import { SearchManifacturer } from ".";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManifacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
