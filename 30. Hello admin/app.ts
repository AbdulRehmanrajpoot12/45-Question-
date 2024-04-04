let users : string[] = ["Admin","Ali","Sara","Ahmad","Faizan"];

users.forEach(users => {
    if (users === "Admin") {
        console.log(" Hello Admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${users}, thank you for logging in again.`)
    }
})