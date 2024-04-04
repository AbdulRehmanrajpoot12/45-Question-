var magicians = ["Jean", "Darren", "Harry"];
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " The Great"));
    });
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var greatMagicians = make_great(magicians.slice());
console.log("Original Magicians:");
show_magicians(magicians);
console.log('Great Magicians:');
show_magicians(greatMagicians);
