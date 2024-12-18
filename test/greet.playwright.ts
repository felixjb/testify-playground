import { expect, test } from "@playwright/test";
import { greet } from "../src/greet.js";

test.describe("greet", () => {
  test("should return a greeting for the given name", () => {
    expect(greet("World")).toEqual("Hello, World!");
  });
});
