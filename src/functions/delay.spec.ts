import { test, expect, vi } from "vitest";
import { delay } from "./delay";

test("delay", async () => {
  vi.useFakeTimers();

  const spy = vi.fn();

  delay(2000).then(() => spy());

  vi.advanceTimersByTime(1000);

  await Promise.resolve();

  expect(spy).not.toHaveBeenCalled();

  vi.runAllTimers();

  await Promise.resolve();

  expect(spy).toHaveBeenCalled();

  vi.useRealTimers();
});
