type PurgedArray<T> = Exclude<T, false | "" | 0 | null | undefined>[];
/**
 * Removes all falsy values (`false`, `null`, `0`, `""`, `undefined`, and `NaN`) from an array.
 *
 * @template T
 * @param {T[]} array - The array to purge.
 * @returns {PurgedArray<T>} A new array containing only truthy values.
 */

export const purge = <T>(array: T[]): PurgedArray<T> => {
  const arrayInstance = [...array];
  const result: PurgedArray<T> = [];

  for (let index = 0; index < arrayInstance.length; index++) {
    if (arrayInstance[index])
      result.push(arrayInstance[index] as PurgedArray<T>[number]);
    else continue;
  }

  return result;
};