import React, { memo } from "react";

const GenreComponent = ({ allGeneres, onGenreClick, selectedGenre }) => {
  return (
    <div className="inline-flex flex-wrap gap-5">
      <h3 className="mr-5 text-xl font-bold">Genres</h3>
      {allGeneres.map((genre) => (
        <button
          value={genre}
          onClick={onGenreClick}
          className={`hover:border-b-2 hover:border-b-abn-yellow ${
            selectedGenre === genre && "border-b-abn-green border-b-2"
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
