function making_car(Manufacturer, Model, ...options) {
    let car = { Manufacturer, Model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

function format_car(car) {
    return JSON.stringify(car, null, 2); // The "2" parameter is for indentation
}

console.log(format_car(making_car("Mercedes", "CLS63", ["Color", "Black"], ["Year", 2018])));
console.log(format_car(making_car("BMW", "E60", ["Color", "Black"], ["Year", 2010])));

