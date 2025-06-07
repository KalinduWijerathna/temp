import { render, screen, fireEvent } from "@testing-library/react";
import { Reserve } from "./Components/Reserve";

describe("Reserve Component", () => {
  beforeEach(() => {
    render(<Reserve />);
  });

  test("renders heading and description", () => {
    expect(screen.getByRole("heading", { name: /reserve a table/i })).toBeInTheDocument();
    expect(screen.getByText(/fill out the form/i)).toBeInTheDocument();
  });

  test("renders all form fields", () => {
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /make your reservation/i })).toBeInTheDocument();
  });

  test("accepts user input", () => {
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "4" } });
    expect(screen.getByLabelText(/number of guests/i).value).toBe("4");
  });
});
