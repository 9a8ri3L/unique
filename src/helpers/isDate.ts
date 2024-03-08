/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * The function `isDate` checks if the input is a Date object.
 * @param {Date} date - An input that you want to check if it is a valid Date instance.
 * @returns A boolean value indicating if the input is a Date object or not.`
 * ```
 *
 *
 * ```
 */
export default function isDate<T>(date: T) {
  return Object.prototype.toString.call(date) === '[object Date]';
}
