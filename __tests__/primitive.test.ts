import { expect, it, describe } from 'vitest';
import unique from '../src/unique';

describe('UNIQUE ARRAY OF PRIMITIVES', () => {
  it('Array of numbers-bigint', () => {
    expect(unique([2n, 1, 2, 3, 2, 1, 2n])).toStrictEqual([2n, 1, 2, 3]);
  });
  it('Array of strings', () => {
    expect(unique(['foo', 'foo', 'bar', 'baz'])).toStrictEqual([
      'foo',
      'bar',
      'baz',
    ]);
  });
  it('Array of booleans', () => {
    expect(unique([true, false, true])).toStrictEqual([true, false]);
  });
  it('Array of null-undefined', () => {
    expect(unique([undefined, null, null, undefined])).toStrictEqual([
      undefined,
      null,
    ]);
  });
  it('Array of symbols', () => {
    expect(unique([Symbol('foo'), Symbol('foo')])[0]?.description).toEqual(
      Symbol('foo').description,
    );
  });
  it('Array of any', () => {
    expect(
      unique([
        1,
        2,
        'foo',
        2,
        65n,
        true,
        false,
        true,
        null,
        undefined,
        'foo',
        1,
        undefined,
        1.5e21,
        null,
        65n,
      ]),
    ).toStrictEqual([1, 2, 'foo', 65n, true, false, null, undefined, 1.5e21]);
  });
});
