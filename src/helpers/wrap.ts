import isDate from './isDate';
import isMap from './isMap';
import isSet from './isSet';

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * The function takes any data input and recursively converts it into a structured object with
 * type information.
 * @param {T} data - The `data` parameter in the `wrap` function represents the input value that you
 * want to wrap and convert into a structured object. This function takes various types of data as
 * input and converts them into an object with a `type` and `value` property based on the type of the
 * input data
 * @param visited - The `visited` parameter in the `wrap` function is a `Set` that keeps track of objects
 * that have already been visited during the wrapping process. This is used to prevent infinite loops
 * in case of circular references within the data being wrapped. Each unique object encountered is
 * added to this Set.
 * @returns The `wrap` function returns an object with two properties: `type` and `value`. The `type`
 * property indicates the data type of the input `data`, and the `value` property contains the
 * processed value of the input data based on its type.
 * ```
 *
 *
 * ```
 */
export default function wrap<T>(
  data: T,
  visited = new Set(),
): { type: string; value: any } | undefined | never {
  switch (typeof data) {
    case 'undefined':
      return {
        type: 'undefined',
        value: undefined,
      };
    case 'string':
      return {
        type: 'string',
        value: data,
      };
    case 'boolean':
      return {
        type: 'boolean',
        value: data,
      };
    case 'symbol':
      return {
        type: 'symbol',
        value: data.description,
      };
    case 'number':
      return {
        type: 'number',
        value: data.toString(),
      };
    case 'bigint':
      return {
        type: 'bigint',
        value: data.toString(),
      };
    case 'object':
      if (!visited.has(data)) {
        visited.add(data);

        if (data === null) {
          return {
            type: 'null',
            value: 'null',
          };
        }

        if (Array.isArray(data)) {
          return {
            type: 'Array',
            value: data.map((item) => wrap(item, visited)),
          };
        }

        if (isMap(data as unknown as Map<any, any>)) {
          return {
            type: 'Map',
            value: JSON.stringify([...(data as any)]),
          };
        }

        if (isSet(data)) {
          return {
            type: 'Set',
            value: JSON.stringify([...(data as any)]),
          };
        }

        if (isDate(data as any)) {
          return {
            type: 'Date',
            value: data.toString(),
          };
        }

        return {
          type: 'ObjectLiteral',
          value: Object.entries(data).reduce(
            (acc, [key, val]) => ({
              ...acc,
              [key]: wrap(val, visited),
            }),
            {},
          ),
        };
      }
      break;
    default:
      throw new Error('Something went wrong!');
  }
}
