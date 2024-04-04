let magicians : string[] = ["Jean","Darren","Harry"];

function show_magicians(magicians : string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    })
}

function make_great(magician:string[]){
    for(let i = 0; i < magician.length; i++){
        magicians[i] = magicians[i] +  " The Great";
    }
}

make_great(magicians);
show_magicians(magicians);