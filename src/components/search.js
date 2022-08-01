import React, { memo } from "react";

const SearchComponent = ({ onSearchChange }) => {
  return (
    <div className="inline-flex gap-2">
      <h3 className="mr-5 text-xl">Search</h3>
      <input
        className="px-2 border-b-2"
        type="text"
        onChange={onSearchChange}
      />
    </div>
  );
};

export const Search = memo(SearchComponent);
