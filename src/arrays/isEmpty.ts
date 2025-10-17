/**
 * Checks whether an array is empty or not.
 *
 * @template T
 * @param {T[]} array - The array to check.
 * @returns {boolean} `true` if the array is empty, otherwise `false`.
 */
export const isEmpty = <T>(array: T[]): boolean => {
  return array.length === 0;
};
