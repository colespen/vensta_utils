/**
 * @param {InputObject[]} input array of objects
 * @param {KeyType} propertyName key of object to search for
 * @param {KeyValue} propertyValue value of key to search for
 * @param {"ASC" | "DESC"} sortDirection direction of sorting. Default: Ascending
 * @returns {InputObject[] | []} object found or empty array
 * @description Search for an object in an array of objects
 * by a specified property name (key) and value.
 */
export function _searchByField<InputObject, KeyType extends keyof InputObject>(
  input: InputObject[],
  propertyName: KeyType,
  propertyValue: InputObject[KeyType]
): InputObject[] | [] {

  if (!propertyName || !propertyValue) {
    throw new Error("Provided field is undefined");
  }

  const resultMap = new Map();

  // Build hash table by iterating over input
  for (const obj of input) {
    const fieldValue = obj[propertyName];

    if (fieldValue) {
      if (!resultMap.has(fieldValue)) {
        resultMap.set(fieldValue, []);
      }
      resultMap.get(fieldValue).push(obj);
    }
  }

  // Retrieve the matching objects from the hash table
  const resultArray = resultMap.get(propertyValue) || [];

  return resultArray;
}