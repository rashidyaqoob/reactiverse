import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter/TodoFooter";

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
  return (
    <BrowserRouter>
      <TodoFooter
      numberOfIncompleteTasks={numberOfIncompleteTasks}
      />
    </BrowserRouter>
    )
  }


it('should render correct number of incomplete task', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks = {5} />);
  const incompleteTasks = screen.getByText(/5 tasks left/i)
  expect (incompleteTasks).toBeInTheDocument();
});

it('should render correct number of incomplete task', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks = {5} />);
  const incompleteTasks = screen.getByText(/5 tasks left/i)
  expect (incompleteTasks).toBeVisible(); // to check if component is visible to user
});

it('should render correct number of incomplete task', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks = {5} />);
  const incompleteTasks = screen.getByText(/5 tasks left/i)
  expect (incompleteTasks).toContainHtml('p'); // Check for element
});

it('should render correct number of incomplete task', async () => {
  render(<MockTodoFooter numberOfIncompleteTasks = {5} />);
  const incompleteTasks = screen.getByTestId('para'); // get by test id , add data-testid to the element
  // expect (incompleteTasks.value).toBe('1 task left'); // Check for value
  expect (incompleteTasks.textContent).toBe('1 task left'); 
});