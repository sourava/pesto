const roman = (a) => {
    if (a >= 1000) {
        return "M" + roman(a-1000);
    } else if (a >= 900 && a < 1000) {
        return "CM" + roman(a-900);
    } else if (a >= 500 && a < 900) {
        return "D" + roman(a-500);
    } else if (a >= 400 && a < 500) {
        return "CD" + roman(a-400);
    } else if (a >= 100 && a < 400) {
        return "C" + roman(a-100);
    } else if (a >= 90 && a < 100) {
        return "XC" + roman(a-90);
    } else if (a >= 50 && a < 90) {
        return "L" + roman(a-50);
    } else if (a >= 40 && a < 50) {
        return "XL" + roman(a-40);
    } else if (a >= 10 && a < 40) {
        return "X" + roman(a-10);
    } else if (a >= 9 && a < 10) {
        return "IX" + roman(a-9);
    } else if (a >= 5 && a < 9) {
        return "V" + roman(a-5);
    } else if (a >= 4 && a < 5) {
        return "IV" + roman(a-4);
    } else if (a >= 1 && a < 4) {
        return "I" + roman(a-1);
    }
    return "";
}

module.exports = roman;
