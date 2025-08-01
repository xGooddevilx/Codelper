import { expect, test, vi } from "vitest";
import { debounce } from "./debounce";

test("debounce", async () => {
  vi.useFakeTimers();

  const fn = vi.fn();
  const debouncedFn = debounce(fn, 1000);

  // Call debouncedFn multiple times quickly
  Array.from({ length: 3 }).forEach(() => {
    debouncedFn();
  });

  // Forward time by 1000ms
  vi.advanceTimersByTime(1000);

  expect(fn).toHaveBeenCalledTimes(1);

  vi.useRealTimers();
});
