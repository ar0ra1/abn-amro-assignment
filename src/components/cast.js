import React from "react";
import { Actor } from "./actor";
import { TransitionState } from "./transitionState";

export const Cast = ({ cast }) => {
  if (!cast) {
    return <TransitionState type="no-data" />;
  }

  return (
    <div className="container" data-testid="cast-component">
      <h3 className="text-2xl font-bold">Cast</h3>
      <div className="grid grid-cols-1 gap-10 my-4 md:grid-cols-2 lg:grid-cols-3">
        {cast && cast.map((actor, i) => <Actor key={i} actor={actor} />)}
      </div>
    </div>
  );
};
