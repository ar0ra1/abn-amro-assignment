import React from "react";

export const TransitionState = ({ type }) => {
  const message = () => {
    switch (type) {
      case "api-error":
        return "Something went wrong...";
      case "api-loading":
        return "Loading...";
      case "no-data":
        return "No data found...";
      default:
        return "Unforseen error...";
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <h2 data-testid={type} className="text-2xl">
        {message()}
      </h2>
    </div>
  );
};
