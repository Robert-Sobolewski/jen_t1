import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter tests", () => {
  it("should render value, button and calculation", () => {
    render(<Counter />);

    // query elements
    const value = screen.getByText(/Value: 0/);
    const button = screen.getByRole("button", { name: "+" });
    const calculation = screen.getByText(/value 0 . 2 = 0/);

    // assert that all elements are rendered in the document
    expect(value).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(calculation).toBeInTheDocument();
  });

  it("should increment value after clicked button", async () => {
    // render component
    render(<Counter />);

    // query the elements
    const value = screen.getByText(/Value: 0/);
    const button = screen.getByRole("button", { name: "+" });
    const calculation = screen.getByText(/value 0 . 2 = 0/);
    fireEvent.click(button);

    // wait for async update
    await waitFor(() => expect(value).toHaveTextContent("Value: 1"));
    await waitFor(() =>
      expect(calculation).toHaveTextContent("value 1 * 2 = 2")
    );
  });
});
