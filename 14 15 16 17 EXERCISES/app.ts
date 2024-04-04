//Exercise 14
let guest : string[] = ["Faizan", "Hammad", "Zain"];

guest.forEach(guest => {
    console.log(`Dear ${guest}, we invited you on dinner tomorrow.`);
});

//Exercise 15
let not_available = "Hammad";
console.log(`\n${not_available} cannot make it to dinner.`);

let new_guest = "Naseer";
guest[guest.indexOf(not_available)]=new_guest;

guest.forEach(guest => {
    console.log(`Dear ${guest}, we invited you on dinner tomorrow.`);
});

//Exercise 16
let guests: string[] =["Faizan", "Naseer", "Zain"];
console.log("\nGood News! I found a bigger dinner table");

guest.unshift("Huzaifa");
guest.splice(guest.length /2, 0 ,"Bilawal");
guest.push("Usman");

guest.forEach(guest => {
    console.log(`Dear ${guest}, we invited you on dinner tomorrow.`);
});

//exercise 17
let guest_list = ["Faizan", "Naseer", "Zain", "Usman", "Huzaifa", "Bilawal"];

console.log("\nSorry, I can only invite two people for dinner.");

while(guest_list.length > 2) {
    let removed_guest = guest_list.pop();
    console.log(`Sorry ${removed_guest}, you are not invited to dinner.`);
}

for(let i = 0; i < guest_list.length; i++) {
    console.log(`Sir ${guest_list[i]}, you are still invited to dinner.`);
}

guest_list.splice(0, 2);

console.log(guest_list);