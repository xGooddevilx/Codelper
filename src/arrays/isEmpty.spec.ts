import { describe, expect, it } from "vitest";
import { isEmpty } from "./isEmpty";

describe("isEmpty", () => {
  it("with full length", () => {
    const arr = [1, 2, 3];
    expect(isEmpty(arr)).toBeFalsy();
  });

  it("with empty array", () => {
    const arr: any[] = [];
    expect(isEmpty(arr)).toBeTruthy();
  });
});
