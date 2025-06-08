import assert from "node:assert";
import { describe, it } from "node:test";
import { greet } from "../src/greet.ts";

describe("greet", () => {
  it("should return a greeting for the given name", () => {
    assert.strictEqual(greet("World"), "Hello, World!");
  });
});
