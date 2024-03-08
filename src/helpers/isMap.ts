/**
 * The function checks if a given object is an instance of the Map class.
 * @param map - The `map` parameter is of type `Map<K, V>`, where `K` represents the type of the keys
 * in the map and `V` represents the type of the values in the map.
 * @returns a boolean value. It returns true if the input `map` is an instance of `Map` and false
 * otherwise.
 *@author Gabriel |
 *{@link https://github.com/9a8ri3l/on-the-run Github}
 *
 * @license MIT License
 *  ```ts
 *              console.log(isMap(new Map())); // true
 *              console.log(isMap({foo: true})); // false
 *              console.log(isMap(['foo', 'bar'])); // false
 *              console.log(isMap(Object.create(null))); // false
 *              console.log(isMap(null)); // false
 *
 *
 *  ```
 */
export default function isMap<K, V>(map: Map<K, V>) {
  return Object.prototype.toString.call(map) === '[object Map]';
}
