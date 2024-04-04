var magicians = ["Jean", "Darren", "Harry"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magician) {
    for (var i = 0; i < magician.length; i++) {
        magicians[i] = magicians[i] + " The Great";
    }
}
make_great(magicians);
show_magicians(magicians);
