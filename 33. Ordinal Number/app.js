var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] == 1) {
        console.log("".concat(numbers[i], "st"));
    }
    else if (numbers[i] == 2) {
        console.log("".concat(numbers[i], "nd"));
    }
    else if (numbers[i] == 3) {
        console.log("".concat(numbers[i], "rd"));
    }
    else if (numbers[i] >= 4 && numbers[i] <= 9) {
        console.log("".concat(numbers[i], "th"));
    }
}
