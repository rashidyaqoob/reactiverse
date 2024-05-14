import { render,screen, fireEvent } from "@testing-library/react";
import AddInput from '../AddInput';

const mockedSetTodo = jest. fn() // used for mock function where we dont care about functions triggered like hooks used in function

describe("AddInput", () => {
  it('should render input element', async () => {
    render( 
      <AddInput
          todos={[]}
          setTodos={mockedSetTodo} />
    );
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    expect(inputElement).toBeInTheDocument();
    });

    it('should be able to change input value', async () => {
      render( 
        <AddInput
            todos={[]}
            setTodos={mockedSetTodo} />
      );
      const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
      fireEvent.change(inputElement, { target: { value: "Go grocery shopping" } })
      expect(inputElement.value).toBe('Go grocery shopping');
      });

      it('should be able to change input value to empty after add', async () => {
        render( 
          <AddInput
              todos={[]}
              setTodos={mockedSetTodo} />
        );
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        const buttonElement = screen.getByRole("button", { name: /Add/i })
        fireEvent.change(inputElement, { target: { value: "Go grocery shopping" } })
        fireEvent.click(buttonElement)
        // expect(inputElement.value).toBe('Go grocery shopping');
        expect(buttonElement.value).toBe('');
        });
})