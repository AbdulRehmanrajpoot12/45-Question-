var users = ["Admin", "Ali", "Sara", "Ahmad", "Faizan"];
users.forEach(function (users) {
    if (users === "Admin") {
        console.log(" Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(users, ", thank you for logging in again."));
    }
});
