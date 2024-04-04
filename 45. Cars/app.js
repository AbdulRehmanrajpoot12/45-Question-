function making_car(Manufacturer, Model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { Manufacturer: Manufacturer, Model: Model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
function format_car(car) {
    return JSON.stringify(car, null, 2); // The "2" parameter is for indentation
}
console.log(format_car(making_car("Mercedes", "CLS63", ["Color", "Black"], ["Year", 2018])));
console.log(format_car(making_car("BMW", "E60", ["Color", "Black"], ["Year", 2010])));
