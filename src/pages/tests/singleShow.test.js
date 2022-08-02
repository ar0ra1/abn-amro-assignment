import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AllShows } from "../allShows";
import { SingleShow } from "../singleShow";

test("Query params are accepted", async () => {
  render(
    <MemoryRouter initialEntries={["/show/1"]}>
      <Routes>
        <Route path="/show/:id" element={<SingleShow />} />
      </Routes>
    </MemoryRouter>
  );
  await waitFor(async () => {
    const component = await screen.findByTestId("component");
    expect(component).toBeInTheDocument();
  });
});

test("Summary exists in document", async () => {
  render(
    <MemoryRouter initialEntries={["/show/1"]}>
      <Routes>
        <Route path="/show/:id" element={<SingleShow />} />
      </Routes>
    </MemoryRouter>
  );
  await waitFor(async () => {
    const summary = await screen.findByTestId("summary");
    expect(summary).toBeInTheDocument();
  });
});

test("should return to home if no id found", async () => {
  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useLocation: jest.fn(),
  }));
  render(
    <MemoryRouter initialEntries={["/show/number"]}>
      <Routes>
        <Route path="/" element={<AllShows />} />
        <Route path="/show/:id" element={<SingleShow />} />
      </Routes>
    </MemoryRouter>
  );
  expect(window.location.pathname).toBe("/");
});
