import React from "react";
import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

test("renders welcome message correctly", () => {
  render(<Welcome name="Adi" />);
  expect(screen.getByText(/Welcome, Adi/i)).toBeInTheDocument();
});

test("matches snapshot", () => {
  const { container } = render(<Welcome name="Adi" />);
  expect(container).toMatchSnapshot();
});