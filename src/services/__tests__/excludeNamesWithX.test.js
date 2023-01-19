const excludeNamesWithX = require('../excludeNamesWithX');

describe("excludeNamesWithX tests suites", () => {
    test("should return an array", () => {
        const result = excludeNamesWithX([]);
        expect(result).toEqual([]);
    });

    test('should return an array with all names as no names have an "x" letter' , () => {
        const result = excludeNamesWithX(['Momo','Hadji','Leo']);
        expect(result).toEqual(['Momo','Hadji','Leo']);
    });
});