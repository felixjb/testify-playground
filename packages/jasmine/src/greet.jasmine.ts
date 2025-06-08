import { greet } from "@playground/core";

describe("greet", () => {
  it("should return a greeting for the given name", () => {
    expect(greet("World")).toBe("Hello, World!");
  });
});
