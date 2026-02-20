import logsReducer, { fetchLogs } from "./logsSlice";

describe("logsSlice", () => {
  const initialState = {
    data: [],
    status: "idle",
    error: null,
  };

  test("returns initial state", () => {
    expect(logsReducer(undefined, { type: "unknown" }))
      .toEqual(initialState);
  });

  test("handles pending", () => {
    const state = logsReducer(initialState, {
      type: fetchLogs.pending.type,
    });
    expect(state.status).toBe("loading");
  });

  test("handles fulfilled", () => {
    const state = logsReducer(initialState, {
      type: fetchLogs.fulfilled.type,
      payload: [{ id: 1, activity: "Test", carbon: 2 }],
    });
    expect(state.status).toBe("success");
    expect(state.data.length).toBe(1);
  });
});