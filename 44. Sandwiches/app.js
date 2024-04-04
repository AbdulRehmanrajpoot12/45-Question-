function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(" "), "."));
}
make_sandwich("bread", "cheese");
make_sandwich("meat", "tomato", "lettuce");
make_sandwich("sprouts", "mustard", "ketchup", "mayo");
