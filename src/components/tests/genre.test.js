import { screen, render, fireEvent } from "@testing-library/react";
import { Genre } from "../genre";

test("click on genre button", () => {
  const mockFn = jest.fn();

  render(
    <Genre
      allGeneres={["Drama", "Comedy"]}
      onGenreClick={mockFn}
      selectedGenre={undefined}
    />
  );
  const comedyButton = screen.getByText("Comedy");
  fireEvent.click(comedyButton);
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toBeCalledTimes(1);
});
