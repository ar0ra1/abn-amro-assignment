import React from "react";
import { Link, useParams } from "react-router-dom";
import { Cast } from "../components/cast";
import { SideBar } from "../components/sidebar";
import { TransitionState } from "../components/transitionState";
import useRequest from "../lib/useRequest";

export const SingleShow = () => {
  const params = useParams();
  const showId = params?.id;

  const { data: infoWithCast, error } = useRequest(
    `shows/${showId}?embed=cast`
  );

  if (error) {
    return <TransitionState type={"api-error"} />;
  }

  if (!infoWithCast) {
    return <TransitionState type={"api-loading"} />;
  }

  return (
    <div className="flex flex-col">
      <div className="inline-flex items-center rounded-sm bg-abn-green">
        <Link to="/" className="h-full px-4 py-2 bg-abn-yellow ">
          Go Back
        </Link>
        <h2 className="ml-4 text-2xl font-bold text-white">
          {infoWithCast.name}
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 my-4 md:grid-cols-6">
          <div className="flex flex-col gap-4 md:gap-6 md:col-start-1 md:col-end-5">
            <strong className="text-xl">Summary: </strong>
            <div
              dangerouslySetInnerHTML={{ __html: infoWithCast.summary }}
            ></div>
          </div>
          <SideBar
            language={infoWithCast.language}
            rating={infoWithCast.rating}
            status={infoWithCast.status}
            network={infoWithCast.network}
            runtime={infoWithCast.runtime}
            genres={infoWithCast.genres}
          />
        </div>
        <Cast cast={infoWithCast._embedded.cast} />
      </div>
    </div>
  );
};
