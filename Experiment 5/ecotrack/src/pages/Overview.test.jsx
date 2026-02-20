import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import logsReducer from "../store/logsSlice";
import Overview from "./Overview";

describe("Overview Page", () => {
  test("renders overview correctly", () => {
    const store = configureStore({
      reducer: { logs: logsReducer },
      preloadedState: {
        logs: {
          data: [
            { id: 1, activity: "Car Travel", carbon: 4 },
            { id: 2, activity: "Electricity", carbon: 6 },
          ],
          status: "success",
          error: null,
        },
      },
    });

    render(
      <Provider store={store}>
        <Overview />
      </Provider>
    );

    expect(screen.getByText("Number of logs")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});