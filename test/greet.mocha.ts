import { expect } from "chai";
import { greet } from "../src/greet.js";

describe("greet", () => {
  it("should return a greeting for the given name", () => {
    expect(greet("World")).to.equal("Hello, World!");
  });
});
