const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test("return an array", () => {
    const inputArray = [12, 21, 31, 14, 51];
    const result = shuffle(inputArray);
    expect(Array.isArray(result)).toBe(true);
  });

  test("return an array of the same length as the argument sent in", () => {
    const inputArray = [21, 12, 31, 14, 51];
    const result = shuffle(inputArray);
    expect(result.length).toEqual(inputArray.length);
  });

  test("contains the same elements", () => {
    const inputArray = [21, 12, 31, 14, 51];
    const result = shuffle(inputArray);
    inputArray.forEach((item) => {
      expect(result).toContain(item);
    });
  });

  test("items have been shuffled", () => {
    const inputArray = [21, 12, 31, 14, 51];
    const result = shuffle(inputArray);
    expect(result).not.toEqual(inputArray);
  });
});
