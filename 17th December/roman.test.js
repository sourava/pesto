const roman = require('./roman');

test('should return an empty string for 0', () => {
    expect(roman(0)).toEqual("");
});

test('should return roman equivalent of given number', () => {
    expect(roman(98)).toEqual("XCVIII");
});