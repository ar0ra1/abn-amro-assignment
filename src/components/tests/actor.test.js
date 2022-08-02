import { render, screen, waitFor } from "@testing-library/react";
import { Actor } from "../actor";

const data = {
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
};

test("component renders properly", async () => {
  render(<Actor actor={data} />);
  await waitFor(async () => {
    expect(screen.getByTestId("real-name")).toBeInTheDocument();
  });
  await waitFor(async () => {
    expect(screen.getByTestId("character-name")).toBeInTheDocument();
  });
});
