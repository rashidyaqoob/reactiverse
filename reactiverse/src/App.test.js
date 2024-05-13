import { render, screen } from "@testing-library/react";
import App from "./App";

test('render learn more link ', () => {
  render (<App/>);
  const  linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
})
