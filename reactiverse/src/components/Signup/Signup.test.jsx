import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../pages/Login/Logincontext";
import HandleSignInBtn from "./Signup";

// Mock AuthContext
const mockAuthContext = {
  isLoggedIn: false,
  logout: jest.fn(),
};

describe("HandleSignInBtn", () => {
  test("renders Log In button when not logged in", () => {
    render(
      <Router>
        <AuthContext.Provider value={mockAuthContext}>
          <HandleSignInBtn />
        </AuthContext.Provider>
      </Router>
    );

    const loginButton = screen.getByText(/Log In/i);
    expect(loginButton).toBeInTheDocument();
  });

  test("renders Log Out button when logged in", () => {
    render(
      <Router>
        <AuthContext.Provider value={{ ...mockAuthContext, isLoggedIn: true }}>
          <HandleSignInBtn />
        </AuthContext.Provider>
      </Router>
    );

    const logoutButton = screen.getByText("Log Out");
    expect(logoutButton).toBeInTheDocument();
  });

  test("calls logout function when clicked", () => {
    render(
      <Router>
        <AuthContext.Provider value={{ ...mockAuthContext, isLoggedIn: true }}>
          <HandleSignInBtn />
        </AuthContext.Provider>
      </Router>
    );

    const logoutButton = screen.getByText("Log Out");
    fireEvent.click(logoutButton);

    // Check if the logout function is called
    expect(mockAuthContext.logout).toHaveBeenCalled();
  });
});
