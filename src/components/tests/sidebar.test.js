import { render, screen } from "@testing-library/react";
import { SideBar } from "../sidebar";

const language = "English";
const rating = { average: "8.5" };
const type = "TV Series";
const status = "Running";
const network = { name: "The CW" };
const runtime = "60";
const genres = ["Drama", "Comedy"];

test("component renders correctly", () => {
  render(
    <SideBar
      network={network}
      runtime={runtime}
      genres={genres}
      language={language}
      rating={rating}
      type={type}
      status={status}
    />
  );
  expect(screen.getByTestId("language")).toBeInTheDocument();
  expect(screen.getByTestId("rating")).toBeInTheDocument();
  expect(screen.getByTestId("type")).toBeInTheDocument();
  expect(screen.getByTestId("status")).toBeInTheDocument();
  expect(screen.getByTestId("network")).toBeInTheDocument();
  expect(screen.getByTestId("runtime")).toBeInTheDocument();
  expect(screen.getByTestId("genres")).toBeInTheDocument();
  expect(screen.getByTestId("language")).toHaveTextContent(language);
  expect(screen.getByTestId("rating")).toHaveTextContent(rating.average);
  expect(screen.getByTestId("type")).toHaveTextContent(type);
  expect(screen.getByTestId("status")).toHaveTextContent(status);
  expect(screen.getByTestId("network")).toHaveTextContent(network.name);
  expect(screen.getByTestId("runtime")).toHaveTextContent(runtime);
  expect(screen.getByTestId("genres")).toHaveTextContent(
    `Genres: Drama, Comedy`
  );
});

test("Missing values", () => {
  render(<SideBar />);
  expect(screen.getByTestId("language")).toBeInTheDocument();
  expect(screen.getByTestId("rating")).toBeInTheDocument();
  expect(screen.getByTestId("type")).toBeInTheDocument();
  expect(screen.getByTestId("status")).toBeInTheDocument();
  expect(screen.getByTestId("network")).toBeInTheDocument();
  expect(screen.getByTestId("runtime")).toBeInTheDocument();
  expect(screen.getByTestId("genres")).toBeInTheDocument();
  expect(screen.getByTestId("language")).toHaveTextContent("Language:");
  expect(screen.getByTestId("rating")).toHaveTextContent("Rating:");
  expect(screen.getByTestId("type")).toHaveTextContent("Not Available");
  expect(screen.getByTestId("status")).toHaveTextContent("Status:");
  expect(screen.getByTestId("network")).toHaveTextContent("Not Available");
  expect(screen.getByTestId("runtime")).toHaveTextContent("Runtime: min");
  expect(screen.getByTestId("genres")).toHaveTextContent("Genres:");
});
