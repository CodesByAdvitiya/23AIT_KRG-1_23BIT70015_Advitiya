import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Login from "./Login";

test("Login button renders", () => {
  render(
    <AuthProvider>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </AuthProvider>
  );

  expect(screen.getByRole("button", { name: /login/i }))
    .toBeInTheDocument();
});