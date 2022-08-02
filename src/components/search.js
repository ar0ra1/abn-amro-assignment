import React, { memo } from "react";

const SearchComponent = ({ onSearchChange }) => {
  return (
    <div className="inline-flex gap-1">
      <h3 className="mr-5 text-xl font-bold">Search</h3>
      <input
        data-testid="search-input"
        className="px-2 border-b-2 outline-none border-b-abn-yellow"
        type="text"
        onChange={onSearchChange}
      />
    </div>
  );
};

export const Search = memo(SearchComponent);
