const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {

    test ("Test to return an array." , () => {
        const inputArray = [1,2,3,4,5]
        const result = shuffle(inputArray)
        expect(Array.isArray(result)).toBe(true)
       });

       test("Test to return an array of equal length to the input array." , () => {
        const inputArray = [2, 4, 6, 8, 10]
        const result = shuffle(inputArray)
        expect(result.length).toEqual(inputArray.length)
       });

});
