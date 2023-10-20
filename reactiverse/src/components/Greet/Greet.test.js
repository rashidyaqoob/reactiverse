import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("Name is rendered", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

test("Greet is rendered with name", () => {
  render(<Greet fname="rashid" lname="yaqoob" />);
  const textElement = screen.getByText(/Hello rashid yaqoob/i);
  expect(textElement).toBeInTheDocument();
});
