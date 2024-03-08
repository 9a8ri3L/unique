/**
 * The function `isSet` checks if the input is a `Set` object.
 * @param {T} set - The `set` parameter is expected to be an object that you
 * want to check if it is a `Set` or not.
 * @returns A boolean value indicating whether the `set` is a `Set` or
 * not.
 * ```
 *
 *
 * ```
 */
export default function isSet<T>(set: T) {
  return Object.prototype.toString.call(set) === '[object Set]';
}
