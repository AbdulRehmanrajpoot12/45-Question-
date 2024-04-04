//Exercise 14
var guest = ["Faizan", "Hammad", "Zain"];
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", we invited you on dinner tomorrow."));
});
//Exercise 15
var not_available = "Hammad";
console.log("\n".concat(not_available, " cannot make it to dinner."));
var new_guest = "Naseer";
guest[guest.indexOf(not_available)] = new_guest;
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", we invited you on dinner tomorrow."));
});
//Exercise 16
var guests = ["Faizan", "Naseer", "Zain"];
console.log("\nGood News! I found a bigger dinner table");
guest.unshift("Huzaifa");
guest.splice(guest.length / 2, 0, "Bilawal");
guest.push("Usman");
guest.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", we invited you on dinner tomorrow."));
});
//exercise 17
var guest_list = ["Faizan", "Naseer", "Zain", "Usman", "Huzaifa", "Bilawal"];
console.log("\nSorry, I can only invite two people for dinner.");
while (guest_list.length > 2) {
    var removed_guest = guest_list.pop();
    console.log("Sorry ".concat(removed_guest, ", you are not invited to dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("\nSir ".concat(guest_list[i], ", you are still invited to dinner."));
}
guest_list.splice(0, 2);
console.log(guest_list);
