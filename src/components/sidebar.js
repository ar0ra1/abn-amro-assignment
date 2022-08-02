import React, { memo } from "react";

const SideBarComponent = ({
  language,
  rating,
  type,
  status,
  network,
  runtime,
  genres,
}) => {
  return (
    <div className="flex flex-col gap-4 p-4 text-white bg-abn-green md:col-start-5 md:col-end-7 h-fit">
      <p data-testid="language">Language: {language}</p>
      <p data-testid="rating">Rating: {rating.average}</p>
      <p data-testid="type">Type: {type || "Not Available"}</p>
      <p data-testid="status">Status: {status}</p>
      <p data-testid="network">Network: {network?.name || "Not Available"}</p>
      <p data-testid="runtime">Runtime: {runtime} min</p>
      <p>
        Genres:{" "}
        {genres.map((g, i) => (
          <span key={i}>{`${g}${i !== genres.length - 1 ? ", " : ""}`}</span>
        ))}
      </p>
    </div>
  );
};

export const SideBar = memo(SideBarComponent);
