import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ShowCard } from "../showCard";

const data = {
  name: "Game of Thrones",
  id: 1399,
  image: {
    original: "https://robohash.org/Game?size=160x240",
  },
  language: "English",
  rating: {
    average: 9.5,
  },
  genres: ["Drama", "Adventure", "Fantasy"],
};

test("component renders", () => {
  render(
    <MemoryRouter>
      <ShowCard data={data} />
    </MemoryRouter>
  );
  expect(screen.getByTestId("name")).toBeInTheDocument();
  expect(screen.getByTestId("name")).toHaveTextContent("Game of Thrones");
  expect(screen.getByTestId("rating")).toHaveTextContent("Rating: 9.5");
  expect(screen.getByTestId("language")).toHaveTextContent("Language: English");
  // testing library ignores html hence, no spaces in the text
  expect(screen.getByTestId("genre")).toHaveTextContent(
    "DramaAdventureFantasy"
  );
});
