export default function apppendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const x of array) {
    newArr.push(appendString + x);
  }

  return newArr;
}
