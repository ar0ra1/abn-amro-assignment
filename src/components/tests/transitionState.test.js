import { render, screen } from "@testing-library/react";
import { TransitionState } from "../transitionState";

test("default error", () => {
  render(<TransitionState />);
  const error = screen.getByTestId("default");
  expect(error).toBeInTheDocument();
  expect(error).toHaveTextContent("Unforseen error...");
});

test("api error", () => {
  render(<TransitionState type="api-error" />);
  const error = screen.getByTestId("api-error");
  expect(error).toBeInTheDocument();
  expect(error).toHaveTextContent("Something went wrong...");
});

test("api loading", () => {
  render(<TransitionState type="api-loading" />);
  const loading = screen.getByTestId("api-loading");
  expect(loading).toBeInTheDocument();
  expect(loading).toHaveTextContent("Loading...");
});

test("no data", () => {
  render(<TransitionState type="no-data" />);
  const noData = screen.getByTestId("no-data");
  expect(noData).toBeInTheDocument();
  expect(noData).toHaveTextContent("No data found...");
});
