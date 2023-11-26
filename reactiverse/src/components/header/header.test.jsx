import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./header";
import { AuthProvider } from "../../pages/Login/Logincontext";

describe("Header", () => {
  test("renders logo text", () => {
    const { getByText } = render(
      <BrowserRouter>
        <AuthProvider>
          <Header />
        </AuthProvider>
      </BrowserRouter>
    );

    const logoElement = getByText("Reactiverse");
    expect(logoElement).toBeInTheDocument();
  });

  test("clicking hamburger toggles navbar", () => {
    const { container } = render(
      <BrowserRouter>
        <AuthProvider>
          <Header />
        </AuthProvider>
      </BrowserRouter>
    );

    const hamburger = container.querySelector(".mobile-hamburger");
    fireEvent.click(hamburger);

    const navbar = container.querySelector(".navbar-container");
    expect(navbar).toHaveClass("hamburger-open");
  });

  test("clicking links navigates to correct pages", () => {
    const { getByText } = render(
      <BrowserRouter>
        <AuthProvider>
          <Header />
        </AuthProvider>
      </BrowserRouter>
    );

    fireEvent.click(getByText("Outfits"));
    expect(window.location.pathname).toBe("/outfit");

    fireEvent.click(getByText("Contact Us"));
    expect(window.location.pathname).toBe("/contact-us");

    fireEvent.click(getByText("Hooks"));
    expect(window.location.pathname).toBe("/hooks");
  });
});
