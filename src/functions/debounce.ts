/**
 * Creates a debounced version of the provided function that delays its execution
 * until after a specified wait time has elapsed since the last time it was invoked.
 *
 * @template T - Tuple of argument types for the function `fn`.
 * @template R - Return type of the function `fn`.
 * 
 * @param {(...args: T) => R} fn - The function to debounce.
 * @param {number} [ms=0] - The delay in milliseconds to wait before invoking `fn`. default is zero ms.
 * 
 * @returns {(...args: T) => void} A new debounced function that delays invoking `fn`.
 */
export const debounce = <T extends any[], R>(
  fn: (...args: T) => R,
  ms: number = 0
): ((...args: T) => void) => {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (...arg: T) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => fn(...arg), ms);
  };
};
