import { render, screen } from "@testing-library/react";
import * as useRequest from "../../lib/useRequest";
import { AllShows } from "../allShows";

test("Check for loading state", () => {
  render(<AllShows />);
  const loading = screen.getByTestId("api-loading");
  expect(loading).toBeInTheDocument();
});

test("SWR is called", () => {
  const mockGet = jest.spyOn(useRequest, "default");
  render(<AllShows />);
  expect(mockGet).toHaveBeenCalled();
});
