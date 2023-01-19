const excludeNamesWithX = require('../excludeNamesWithX');

describe("excludeNamesWithX tests suites", () => {
    test("should return an array", () => {
        const result = excludeNamesWithX([]);
        expect(result).toEqual([]);
    });
});