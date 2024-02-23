const { romanToInt } = require("./program2");
const assert = require("assert");



describe("test cases for problem 2 ", function () {

    it("test case 1", function () {
        const result = romanToInt("III");
        assert.equal(3, result);
    });

    it("test case 2", function () {
        const result = romanToInt("LVIII");
        assert.equal(58, result);
    });

    it("test case 3", function () {
        const result = romanToInt("MCMXCIV");
        assert.equal(1994, result);
    });

    it("test case 4", function () {
        const result = romanToInt("X");
        assert.equal(10, result);
    });

    it("test case 5", function () {
        const result = romanToInt("IV");
        assert.equal(4, result);
    });

    it("test case 6", function () {
        const result = romanToInt("IX");
        assert.equal(9, result);
    });

    it("test case 7", function () {
        const result = romanToInt("MMMCMXCIX");
        assert.equal(3999, result);
    });

    it("test case 8", function () {
        const result = romanToInt("");
        assert.equal(0, result);
    });

})

