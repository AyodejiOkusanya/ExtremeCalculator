import { evaluate } from "./evaluate";

it("should add two numbers", () => {
  expect(evaluate("2 + 3")).toBe("5");
});
