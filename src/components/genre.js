import React, { memo } from "react";

const GenreComponent = ({ allGeneres, onGenreClick, selectedGenre }) => {
  return (
    <div className="inline-flex gap-5">
      <h3 className="mr-5 text-xl">Genres</h3>
      {allGeneres.map((genre) => (
        <button
          value={genre}
          onClick={onGenreClick}
          className={`hover:border-b-2 ${
            selectedGenre === genre && "border-b-teal-200 border-b-2"
          }`}
          key={genre}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export const Genre = memo(GenreComponent);
