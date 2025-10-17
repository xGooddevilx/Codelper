import { describe, expect, it } from "vitest";
import { purge } from "./purge";

describe("purge", () => {
  it("remove falsy values", () => {
    const arr = [false, 1, 2, "", "M", null, undefined];

    const purgedArr = purge(arr);

    purgedArr.forEach(element => {
      expect(Boolean(element)).toBeTruthy();
    });
  });

  it("with empty", () => {
    const arr: any[] = [];

    const purgedArr = purge(arr);

    expect(purgedArr).toEqual([]);
  });
});
