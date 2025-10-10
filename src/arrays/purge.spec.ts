import { expect, test } from "vitest";
import { purge } from "./purge";

test("array purge", async () => {
  const arr = [false, 1, 2, "", "M", null, undefined];

  const purgedArr = purge(arr);

  purgedArr.forEach(element => {
    expect(Boolean(element)).toBeTruthy();
  });
});


test("array purge with empty", async () => {
  const arr : any[] = [];

  const purgedArr = purge(arr);

  expect(purgedArr).toEqual([]);
});
