const without = require('./without');

test('should return array without numbersToRemove', () => {
  expect(without([1, 2], [1, 2, 1, 4, 5])).toEqual([4, 5]);
});