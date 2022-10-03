const prompt = require("prompt-sync")();

console.log("Welcome to Joggerman App. ");
let name = prompt("Please Enter your Name: ")

console.log("");
console.log(`Good day ${name}, Good to have you back!`);
console.log("");

while (true) {
    let goal = parseInt(prompt("Please Enter your set GOAL: "));
    let entry = prompt("Please press Y to continue or R to reSet your GOAL, otherwise press Q to QUIT: ").toUpperCase();

    if (entry === "Q") {
        console.log(`Wow...... it really saddens my heart to see you go ${name}`);
        break;
    } else if (entry === "R") {
        console.log("Wanna reset your GOAL, ....let's do this!");
        continue;
    } else if (entry === "Y") {
        while (true) {
            console.log(`Your set jogging GOAL is ${goal} mins!!`);
            console.log("");
            let start = parseInt(prompt("How many minutes do you want to jog for: "))
            if (start >= goal) {
                console.log(`Ooops your start goal is impossible....!`);
                continue;
            } else if (start <= 0) {
                console.log(`Congratulations ${name}....You've acheived your set GOAL.`);
                break;
            }
            goal = goal - start;
            console.log(`Awesome ${name}...You have ${goal} mins left to go. \n Let's do this!`);
        }
    }
    break;
}