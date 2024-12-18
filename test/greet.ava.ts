import test from "ava";
import { greet } from "../src/greet.js";

test("should return a greeting for the given name", (t) => {
  t.is(greet("World"), "Hello, World!");
});
