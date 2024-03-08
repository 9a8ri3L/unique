import parse from './helpers/parse';
import stringify from './helpers/stringify';

/**
 * The function `unique` takes an array of values, removes duplicates, and returns a new array with
 * unique values.
 * @param {T[]} array - An array of elements of any type.
 * @returns An array of unique elements from the input array.
 *
 * @see __tests__
 *
 * ```
 *
 *
 * ```
 */
export default function unique<T>(array: T[]): T[] {
  const set = new Set();
  let i = 0;
  while (i < array.length) {
    if (!set.has(stringify(array[i]))) set.add(stringify(array[i]));
    i++;
  }
  return [...set].map((value) => parse(value));
}
