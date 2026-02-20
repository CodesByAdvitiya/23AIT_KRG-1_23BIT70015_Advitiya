import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import logsReducer from "../store/logsSlice";
import Logs from "./Logs";

describe("Logs Page", () => {
  it("renders logs after loading", async () => {
    const store = configureStore({
      reducer: { logs: logsReducer },
    });

    render(
      <Provider store={store}>
        <Logs />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText("Car Travel")).toBeInTheDocument();
    });
  });
});