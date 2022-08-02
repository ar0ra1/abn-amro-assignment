import { screen, render } from "@testing-library/react";
import { Footer } from "../footer";

test("renders footer", () => {
  render(<Footer />);
  expect(screen.getByTestId("footer-github")).toBeInTheDocument();
  expect(screen.getByTestId("footer-author")).toBeInTheDocument();
  expect(screen.getByTestId("footer-author")).toHaveTextContent(
    "by Akash Arora"
  );
});
