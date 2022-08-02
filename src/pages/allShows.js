import React, { useCallback, useMemo, useState } from "react";
import { Genre } from "../components/genre";
import { Search } from "../components/search";
import { ShowCard } from "../components/showCard";
import { TransitionState } from "../components/transitionState";
import useRequest from "../lib/useRequest";

export const AllShows = () => {
  const { data, error } = useRequest(`shows`);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchText, setSearchText] = useState("");

  const allGeneres = useMemo(() => {
    const genres = new Set();
    if (data) {
      data.forEach((show) => show.genres.length && genres.add(...show.genres));
    }
    return Array.from(genres);
  }, [data]);

  const filterSearch = useCallback(
    (filterOnData) => {
      return filterOnData.filter((e) =>
        e.name.toLowerCase().includes(searchText)
      );
    },
    [searchText]
  );

  const filterGenre = useCallback(
    (filterOnData) => {
      return filterOnData.filter((e) => e.genres.includes(selectedGenre));
    },
    [selectedGenre]
  );

  const dataToDisplay = useMemo(() => {
    if (selectedGenre === "" && searchText === "") {
      return data;
    }
    if (selectedGenre !== "" && searchText !== "") {
      return filterGenre(filterSearch(data));
    }
    if (selectedGenre !== "") {
      return filterGenre(data);
    }
    if (searchText !== "") {
      return filterSearch(data);
    }
  }, [data, selectedGenre, searchText, filterSearch, filterGenre]);

  const onGenreClick = (event) => {
    const genre = event.target.value;
    setSelectedGenre(selectedGenre === genre ? "" : genre);
  };

  const onSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text.trim());
  };

  if (error) {
    return <TransitionState type="api-error" />;
  }

  if (!data) {
    return <TransitionState type="api-loading" />;
  }

  return (
    <div className="container w-full mx-auto my-10">
      <div className="flex flex-col justify-between gap-4 mb-6 md:flex-row">
        <Genre
          allGeneres={allGeneres}
          onGenreClick={onGenreClick}
          selectedGenre={selectedGenre}
        />
        <Search onSearchChange={onSearchChange} />
      </div>
      {dataToDisplay.length ? (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {dataToDisplay.map((show) => (
            <ShowCard key={show.id} data={show} />
          ))}
        </div>
      ) : (
        <TransitionState type="no-data" />
      )}
    </div>
  );
};
