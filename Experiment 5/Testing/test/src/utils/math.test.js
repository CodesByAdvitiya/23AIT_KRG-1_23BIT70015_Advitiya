import { add, isEven, getUserName } from "./math";

test("adds numbers correctly", () => {
  expect(add(2, 4)).toBe(6);
});

test("checks even numbers correctly", () => {
  expect(isEven(20)).toBe(true);
  expect(isEven(9)).toBe(false);
});

test("returns correct username", () => {
  expect(getUserName({ name: "Adi" })).toBe("Adi");
  expect(getUserName({ name: null })).toBe("Guest");
});