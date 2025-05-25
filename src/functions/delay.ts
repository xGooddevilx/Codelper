/**
 * 
 * @param ms - The number of milliseconds to delay.
 * @returns
 * @description Delay a promise for a specified number of milliseconds. 
 */

export const delay = (ms: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}