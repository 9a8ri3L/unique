import unwrap from './unwrap';

/**
 * The function `parse` takes in data, parses it as a string, and then unwraps the parsed
 * data.
 * @param {T} data - The `data` parameter in the `parse` function is the wrapped input.
 * The function then attempts to parse the `data` as a
 * string using `JSON.parse` and passes the result to the `unwrap` function.
 * @returns The function `parse` is returning the result of calling `JSON.parse` on the input `data`,
 * which is then passed to the `unwrap` function. The specific return value will depend on the input
 * `data` and the implementation of the `unwrap` function.
 * @see unwrap
 *
 * ```
 *
 *
 * ```
 */
export default function parse<T>(data: T) {
  return unwrap(JSON.parse(data as string));
}
