import wrap from './wrap';

/**
 * The function `stringify` takes any data input, wraps it, and returns the JSON stringified version of
 * the wrapped data.
 * @param {T} data - The `data` parameter is the input which we need to wrap.
 * The function then calls the `wrap` function on the `data` before
 * stringifying it using `JSON.stringify`.
 * @returns The `stringify` function is returning the JSON string representation of the input data
 * after wrapping it using the `wrap` function.
 * @see wrap
 * ```
 *
 *
 * ```
 */
export default function stringify<T>(data: T) {
  return JSON.stringify(wrap(data));
}
