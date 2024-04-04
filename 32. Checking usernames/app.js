var current_users = ["Fawad", "Ali", "Sara", "Admin", "Usman"];
var new_users = ["Mohammad", "user5", "Faizan", "Admin", "user7"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
