import { describe, it, expect } from 'vitest';
import unique from '../src/unique';

describe('UNIQUE ARRAY OF OBJECTS', () => {
  const obj1 = { a: 'foo' };
  const obj2 = { a: 'foo' };
  const map1 = new Map().set('foo', 1);
  const map2 = new Map().set('foo', 1);
  const complexObj1 = {
    a: {
      aa: 10,
      b: 50,
      c: {
        d: [
          true,
          { f: 'foo', date: new Date(2020, 0, 1) },
          false,
          2,
          new Date(2024, 0, 1),
        ],
      },
    },
    b: obj1,
    c: { done: [true, false, [1, 2, 3, { e: 15 }]] },
    map: map1,
  };
  const complexObj2 = {
    a: {
      aa: 10,
      b: 50,
      c: {
        d: [
          true,
          { f: 'foo', date: new Date(2020, 0, 1) },
          false,
          2,
          new Date(2024, 0, 1),
        ],
      },
    },
    b: obj2,
    c: { done: [true, false, [1, 2, 3, { e: 15 }]] },
    map: map2,
  };

  it('array of primitive value objects', () => {
    expect(unique([obj1, obj2])).toStrictEqual([obj1]);
  });

  it('array of nested value objects', () => {
    expect(unique([{ a: obj1 }, { a: obj2 }])).toStrictEqual([{ a: obj1 }]);
  });

  it('array of nested value objects and maps', () => {
    expect(
      unique([
        { a: obj1, b: map1 },
        { a: obj2, b: map2 },
      ]),
    ).toStrictEqual([{ a: obj1, b: map1 }]);
  });

  it('array of nested value objects, maps and arrays', () => {
    expect(
      unique([
        { a: obj1, b: map1, c: [1, 2, 3] },
        { a: obj2, b: map2, c: [1, 2, 3] },
      ]),
    ).toStrictEqual([{ a: obj1, b: map1, c: [1, 2, 3] }]);
  });

  it('array of nested arrays', () => {
    expect(
      unique([
        [1, 2, { a: map1 }, obj1],
        [1, 2, { a: map2 }, obj2],
      ]),
    ).toStrictEqual([[1, 2, { a: map1 }, obj1]]);
  });

  it('array of maps', () => {
    expect(unique([map1, map2, map2, map1])).toStrictEqual([map1]);
  });

  it('array of dates', () => {
    expect(unique([new Date(2024, 0, 1), new Date(2024, 0, 1)])).toStrictEqual([
      new Date(2024, 0, 1),
    ]);
  });

  it('array of complex objects', () => {
    expect(unique([complexObj1, complexObj2])).toStrictEqual([complexObj1]);
  });
});
