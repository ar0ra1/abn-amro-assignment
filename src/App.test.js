import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders default layout", () => {
  render(<App />);
  // check if suspense is working
  const navHeading = screen.getByTestId("nav-heading");
  expect(navHeading).toBeInTheDocument();

  const footerAuthor = screen.getByTestId("footer-author");
  expect(footerAuthor).toBeInTheDocument();

  const footerGithub = screen.getByTestId("footer-github");
  expect(footerGithub).toBeInTheDocument();
});
