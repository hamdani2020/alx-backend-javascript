/**
 * This function named hasValuesFromArray
 * returns a boolean if all the elements
 * in the array exist the set.
 */

export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
