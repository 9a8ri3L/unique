/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * The function takes a wrapper object with a specified type and returns the unwrapped value
 * based on the type.
 * @param {T} wrapper - The `wrapper` parameter is an object with a `type` property that specifies the
 * type of the wrapped value and a `value` property that contains the actual value. The `unwrap`
 * function takes this wrapper object and returns the unwrapped value based on the type specified in
 * the `type` property
 * @returns The function `unwrap` takes an object `wrapper` with a `type` property and a `value`
 * property. It then checks the `type` property and returns the unwrapped `value` based on the type.
 *
 * ```
 *
 *
 * ```
 */
export default function unwrap<T extends { type: string; value: any }>(
  wrapper: T,
): any {
  switch (wrapper.type) {
    case 'null':
      return null;
    case 'undefined':
      return undefined;
    case 'string':
    case 'boolean':
      return wrapper.value;
    case 'symbol':
      return Symbol(wrapper.value);
    case 'number':
      return Number(wrapper.value);
    case 'bigint':
      return BigInt(wrapper.value);
    case 'Array':
      return wrapper.value.map(unwrap);
    case 'Map':
      return new Map(JSON.parse(wrapper.value));
    case 'Set':
      return new Set(JSON.parse(wrapper.value));
    case 'Date':
      return new Date(wrapper.value);
    case 'ObjectLiteral':
      return Object.entries(wrapper.value).reduce(
        (acc, [key, val]) => ({
          ...acc,
          [key]: unwrap(val as T),
        }),
        {},
      );
    default:
      throw new Error();
  }
}
