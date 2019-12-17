const sumFibs = require('./sumFibs');

test('should return 0 when the given number is 0', () => {
  expect(sumFibs(0)).toEqual(0);
});

test('should return 2 when the given number is 1', () => {
    expect(sumFibs(1)).toEqual(2);
});

test('should return 5 when the given number is 3', () => {
    expect(sumFibs(3)).toEqual(5);
});
