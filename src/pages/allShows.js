import React from "react";
import { ShowCard } from "../components/showCard";
import useRequest from "../lib/useRequest";

export const AllShows = () => {
  const { data, error } = useRequest(`shows`);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 data-testid="api-error" className="text-2xl">
          {" "}
          Something went wrong...
        </h2>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 data-testid="api-loading" className="text-2xl">
          {" "}
          Loading...
        </h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-10 p-10 my-10 md:grid-cols-3 lg:grid-cols-5">
      {data.map((show) => (
        <ShowCard key={show.id} data={show} />
      ))}
    </div>
  );
};
