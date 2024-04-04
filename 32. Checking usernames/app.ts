let current_users : string[] = ["Fawad","Ali","Sara","Admin","Usman"];
let new_users : string[] = ["Mohammad","user5","Faizan","Admin","user7"];

new_users.forEach(newUser => {
    if(current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else{
        console.log(`${newUser} is available.`);
    }
})