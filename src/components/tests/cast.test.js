import { screen, render } from "@testing-library/react";
import { Cast } from "../cast";

const cast = [
  {
    actor: {
      person: {
        name: "Brad Pitt",
      },
      character: {
        name: "Brad Pitt",
        image: {
          original: "https://robohash.org/Brad_Pitt?size=160x240",
        },
      },
    },
  },
];

test("component renders", () => {
  render(<Cast cast={cast} />);
  expect(screen.getByTestId("cast-component")).toBeInTheDocument();
});

test("components shows no data", () => {
  render(<Cast />);
  expect(screen.getByTestId("no-data")).toBeInTheDocument();
});
