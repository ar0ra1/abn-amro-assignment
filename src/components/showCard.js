import React, { memo } from "react";
import { Link } from "react-router-dom";

const ShowCardComponent = ({ data }) => {
  const { name, id, image, language, rating, genres } = data;

  return (
    <div className="flex flex-col max-w-sm overflow-hidden transition-all rounded shadow-lg hover:shadow-2xl hover:scale-105">
      <Link to={`/show/${id}`}>
        <img
          loading="lazy"
          className="object-fill w-full h-96"
          src={`${image.original}`}
          alt={`${name}`}
        />
        <div className="flex flex-col items-stretch flex-1 gap-2 px-6 py-4">
          <div data-testid="name" className="mb-2 text-xl font-bold">
            {name}
          </div>
          <p data-testid="rating">Rating: {rating.average}</p>
          <p data-testid="language">Language: {language}</p>
          <div data-testid="genre">
            {genres.map((genre, id) => (
              <span
                key={id}
                className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export const ShowCard = memo(ShowCardComponent);
