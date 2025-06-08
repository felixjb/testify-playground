import { greet } from "@playground/core";
import test from "ava";

test("should return a greeting for the given name", (t) => {
  t.is(greet("World"), "Hello, World!");
});
