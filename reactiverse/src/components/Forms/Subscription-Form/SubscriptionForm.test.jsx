import { render, fireEvent, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SubscriptionForm from "./SubscriptionForm";

test("renders SubscriptionForm", () => {
  render(
    <BrowserRouter>
      <SubscriptionForm />
    </BrowserRouter>
  );

   // Perform actions that trigger the "duplicate" status
   fireEvent.change(screen.getByPlaceholderText("Email"), { target: { value: "example@example.com" } });
   fireEvent.submit(screen.getByTestId("subscribe-form"));

  // Find the form within the rendered SubscriptionForm component
  const form = screen.getByTestId("subscribe-form");

  // Trigger the form submission in the SubscriptionForm component
  fireEvent.submit(form);

  // Assert that the status is empty initially
  expect(
    screen.queryByText(/We've already enabled subscription on this email/i)
  )
  expect(
    screen.queryByText(
      /Congratulations! We've enable subscription on this email/i
    )
  ).toBeNull();

  // Change the input value to a unique email
  fireEvent.change(screen.getByPlaceholderText("Email"), {
    target: { value: "test@example.com" },
  });

  // Trigger the form submission again
  fireEvent.submit(form);

  // Assert that the status is success
  expect(
    screen.queryByText(/We've already enabled subscription on this email/i)
  ).toBeNull();
  expect(
    screen.getByText(
      /Congratulations! We've enable subscription on this email/i
    )
  ).toBeInTheDocument();

  // Change the input value to a duplicate email
  fireEvent.change(screen.getByPlaceholderText("Email"), {
    target: { value: "test@example.com" },
  });

  // Trigger the form submission again
  fireEvent.submit(form);
});
