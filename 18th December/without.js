const without = (numbersToRemove, numbersList) => numbersList.filter(value => !numbersToRemove.includes(value));

module.exports = without;