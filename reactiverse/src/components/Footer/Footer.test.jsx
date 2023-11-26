import { render, screen, fireEvent  } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Subscriptionform from "../Forms/SubscriptionForm.jsx";
import Footer from "./Footer.jsx";

describe("Footer", () => {
  test("Footer Renders correctly", () => {
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
    // Check if the component renders without errors
    expect(screen.getByText("Reactiverse")).toBeInTheDocument();
    expect(
      screen.getByText("A React learning App for beginners")
    ).toBeInTheDocument();
    expect(screen.getByText("Links")).toBeInTheDocument();
    expect(screen.getByText("Other")).toBeInTheDocument();
    expect(screen.getByText("Support")).toBeInTheDocument();
    expect(
      screen.getByText("Copyright ©Reactiverse. Designed by Us")
    ).toBeInTheDocument();

    // Check "Links" section
    const linksSection = screen.getByText("Links");
    expect(linksSection).toBeInTheDocument();

    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.tagName).toBe("A");
    expect(homeLink.getAttribute("href")).toBe("/");

    const aboutLink = screen.getByText("About Us");
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink.tagName).toBe("A");
    expect(aboutLink.getAttribute("href")).toBe("/about");

    const contactLink = screen.getByText("Contact");
    expect(contactLink).toBeInTheDocument();
    expect(contactLink.tagName).toBe("A");
    expect(contactLink.getAttribute("href")).toBe("/contact-us");

    const hooksLink = screen.getByText("Hooks");
    expect(hooksLink).toBeInTheDocument();
    expect(hooksLink.tagName).toBe("A");
    expect(hooksLink.getAttribute("href")).toBe("/hooks");

    // Check "Other" section
    const otherSection = screen.getByText("Other");
    expect(otherSection).toBeInTheDocument();

    const faqLink = screen.getByText("FAQ");
    expect(faqLink).toBeInTheDocument();
    expect(faqLink.tagName).toBe("A");
    expect(faqLink.getAttribute("href")).toBe("/faq");

    const cookiesLink = screen.getByText("Cookies Policy");
    expect(cookiesLink).toBeInTheDocument();
    expect(cookiesLink.tagName).toBe("A");
    expect(cookiesLink.getAttribute("href")).toBe("/cookies-policy");

    const termsLink = screen.getByText("Terms and Condition");
    expect(termsLink).toBeInTheDocument();
    expect(termsLink.tagName).toBe("A");
    expect(termsLink.getAttribute("href")).toBe("/terms-and-conditions");

    const supportLink = screen.getByText("Support");
    expect(supportLink).toBeInTheDocument();
    expect(supportLink.tagName).toBe("A");
    expect(supportLink.getAttribute("href")).toBe("/support");
  });
  test("renders SubscriptionForm", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    // Check if the SubscriptionForm component is rendered
     const form = screen.getByTestId('subscribe-form');
     fireEvent.submit(form);
  });
});
