import { screen, render, fireEvent } from "@testing-library/react";
import { Search } from "../search";

test("onchange event", () => {
  const mockFn = jest.fn();
  render(<Search onSearchChange={mockFn} />);
  const input = screen.getByTestId("search-input");
  fireEvent.change(input, { target: { value: "test" } });
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toBeCalledTimes(1);
});
