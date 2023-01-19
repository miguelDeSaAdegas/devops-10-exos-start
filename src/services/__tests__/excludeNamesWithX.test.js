const excludeNamesWithX = require("../excludeNamesWithX");

describe("excludeNamesWithX tests suites", () => {
    test("should return an array", () => {
        const result = excludeNamesWithX([]);
        expect(result).toEqual([]);
    });

    test('should return an array with all names as no names have an "x" letter', () => {
        const result = excludeNamesWithX(["Momo", "Hadji", "Leo"]);
        expect(result).toEqual(["Momo", "Hadji", "Leo"]);
    });

    test('should return an array with only the names that do not have the letter "x"', () => {
        const result = excludeNamesWithX(["DMX", "Xzibit", "JeanKevin"]);
        expect(result).toEqual(["JeanKevin"]);
    });

    test("should return an array with only the 2 names who do not have a x", () => {
        const result = excludeNamesWithX(["JC", "Leo", "xena"]);
        expect(result).toEqual(["JC", "Leo"]);
    });
});
