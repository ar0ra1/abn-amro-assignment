import { screen, render } from "@testing-library/react";
import { Nav } from "../Nav";

test("component renders", () => {
  render(<Nav />);
  expect(screen.getByTestId("nav-heading")).toBeInTheDocument();
  expect(screen.getByTestId("nav-heading")).toHaveTextContent(
    "ABN AMRO Assignment"
  );
});
