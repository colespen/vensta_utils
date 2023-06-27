import { dummyData } from "../dummy-data/dummy-data";
import { _searchByField } from "../searchByField";

describe("_sortByPropertyNamesOrder", () => {
  it("should return the object(s) with matching field provided - 'age': 25", () => {
    const searchResult = _searchByField(dummyData, "age", 25);
    let containsCorrectAge = false;
    if (searchResult.length > 1) {
      searchResult.forEach((obj) => {
        if (obj.age === 25) {
          containsCorrectAge = true;
        }
      });
    }
    if (searchResult.length === 1) {
      if (searchResult[0].age === 25) {
        containsCorrectAge = true;
      }
    }

    expect(containsCorrectAge).toBe(true);
  });

  it("should return the object(s) with matching field provided - 'gender': female", () => {
    const searchResult = _searchByField(dummyData, "gender", "female");
    let containsCorrectAge = false;
    if (searchResult.length > 1) {
      searchResult.forEach((obj) => {
        if (obj.gender === "female") {
          containsCorrectAge = true;
        }
      });
    }
    if (searchResult.length === 1) {
      if (searchResult[0].gender === "female") {
        containsCorrectAge = true;
      }
    }

    expect(containsCorrectAge).toBe(true);
  });
});
