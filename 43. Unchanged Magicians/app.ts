let magicians: string[] = ["Jean", "Darren", "Harry"];

function make_great(magicians: string[]): string[] {
    let greatMagicians: string[] = [];
    magicians.forEach(magician => { 
        greatMagicians.push(`${magician} The Great`);
    });
    return greatMagicians;
}

function show_magicians(magicians: string[]) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

let greatMagicians = make_great(magicians.slice());
console.log("Original Magicians:");
show_magicians(magicians);
console.log('Great Magicians:');
show_magicians(greatMagicians);
