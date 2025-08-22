import { throttle } from "./throttle";
import { expect, test, vi } from "vitest";

test("throttle", async () => {
  vi.useFakeTimers();

  const fn = vi.fn();
  const throttledFunction = throttle(fn, 5000);

  Array.from({ length: 4 }).forEach(() => {
    throttledFunction();
  });

  vi.advanceTimersByTime(3000);

  expect(fn).toHaveBeenCalledTimes(1);

  vi.advanceTimersByTime(3000);
  fn()

  expect(fn).toHaveBeenCalledTimes(2)

});
