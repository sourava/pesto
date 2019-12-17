const flatten = require('./flatten');

test('should return an empty array when empty array is supplied to the function', () => {
    expect(flatten([])).toEqual([]);
});

test('should return flatten array of one level', () => {
    expect(flatten([1, 2, [3, 4, [5, 6]]])).toEqual([1, 2, 3, 4, [5, 6]]);
});
