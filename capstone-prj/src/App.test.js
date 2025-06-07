import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from "./Components/index.js";

test("renders navigation links", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  expect(screen.getByText(/specials/i)).toBeInTheDocument();
  expect(screen.getByText(/testimonials/i)).toBeInTheDocument();
  expect(screen.getByText(/about/i)).toBeInTheDocument();
  expect(screen.getByText(/reserve/i)).toBeInTheDocument();
});
