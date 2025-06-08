import { greet } from "@playground/core";
import { expect } from "chai";

describe("greet", () => {
  it("should return a greeting for the given name", () => {
    expect(greet("World")).to.equal("Hello, World!");
  });
});
