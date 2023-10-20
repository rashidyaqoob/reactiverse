import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"; // Import the appropriate router
import Footer from "./Footer.jsx";

describe("Footer", () => {
  test("Renders correctly", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const heading1 = screen.getByRole("heading", {
      level: 1,
    });
    expect(heading1).toBeInTheDocument();
    const heading2 = screen.getByRole("heading", {
      level: 2,
      name: /Links/i,
    });
    expect(heading2).toBeInTheDocument();

    const other = screen.getByRole("heading", {
      level: 2,
      name: /Other/i,
    });
    expect(other).toBeInTheDocument();
  });
});
