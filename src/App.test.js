import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import TodoFooter from "./components/TodoFooter/TodoFooter";
import AddInput from "./components/AddInput/AddInput";
// test("renders learn react link", () => {
//   render(<Header title="Test" />);
//   const linkElement = screen.getByText(/Test/i);
//   expect(linkElement).toBeInTheDocument();
// });

// const Mock = ({ numberOfIncompleteTasks }) => {
//   return (
//     <BrowserRouter>
//       <TodoFooter
//         numberOfIncompleteTasks={numberOfIncompleteTasks}
//       ></TodoFooter>
//     </BrowserRouter>
//   );
// };
// test("renders Multi heading", async () => {
//   render(<Mock numberOfIncompleteTasks={5} />);
//   const linkElement = screen.getByText(/5 tasks left/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("fire event", () => {
  test("test 1", () => {
    render(<AddInput todos={[]} setTodos={jest.fn()} />);

    const elements = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(elements, { target: { value: "Go" } });
    expect(elements.value).toBe("Go");
  });

  test("check button", () => {
    render(<AddInput todos={[]} setTodos={jest.fn()} />);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(buttonElement);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement.value).toBe("");
  });
});
