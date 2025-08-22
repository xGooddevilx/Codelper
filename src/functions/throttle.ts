/**
 * Creates a throttled version of a function that, when invoked repeatedly, 
 * ensures the original function is called at most once every `delay` milliseconds.
 *
 * The returned function will call the `callback` immediately on the first call,
 * then ignore subsequent calls until the delay period has passed.
 *
 * @template T - The argument types of the callback function.
 * @param {(...args: T) => void} callback - The function to throttle.
 * @param {number} delay - The number of milliseconds to wait before allowing the next call.
 * @returns {(...args: T) => void} A new throttled function.
 *
 * @example
 * const throttledLog = throttle((msg: string) => console.log(msg), 1000);
 * throttledLog("Hello"); // Executes immediately
 * throttledLog("World"); // Ignored if called within 1 second
 */

export const throttle = <T extends any[]>(
  callback: (...args: T) => void,
  delay: number
): ((...args: T) => void) => {
  let calledLastTime: any = null;
  return (...args: T) => {
    if (calledLastTime === null) {
      callback(...args);
      calledLastTime = setTimeout(() => {
        calledLastTime = null;
      }, delay);
    }
  };
};