/**
 * Returns a promise that resolves after a specified delay.
 *
 * @param {number} ms - The number of milliseconds to wait before resolving the promise.
 * @returns {Promise<void>} A promise that resolves after the given delay.
 *
 * @example
 * await delay(1000); // Waits for 1 second
 */
export const delay = (ms: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};
