const sumFibs = (a) => {
    if (a < 1) {
        return 0;
    }
    else if (a >= 1 && a < 3) {
        return 2;
    }
    return 2 + sumOfOddFibo(a, 1, 2);
}

const sumOfOddFibo = (a, first, second) => {
    if (first + second > a) {
        return 0;
    }
    return (first + second) % 2 != 0 ? first + second + sumOfOddFibo(a, second, first + second) : sumOfOddFibo(a, second, first + second)
}

module.exports = sumFibs;
