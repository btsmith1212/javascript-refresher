// import { apiKey } from "./util.js";
// import apiKey from "./util.js";
// import { apiKey, abc as content} from "./util.js";
// import * as util from "./util.js"


// console.log (apiKey)
// console.log (content)
// console.log (util.abc)
// console.log (util.apiKey)

// function greetUser(userName, message = "Hello!"){
//     //console.log(userName);
//     //console.log(message);
//     return "Hi, I am " + userName + "." + message;
// }

// greetUser("Max");
// greetUser("Manuel", "Hello, what's up?");

function createGreeting(userName, message = "Hello!"){
    //console.log(userName);
    //console.log(message);
    return "Hi, I am " + userName + ". " + message;
}

// createGreeting("Max");
const greeting1 = createGreeting("Max");
console.log(greeting1);

// createGreeting("Manuel", "Hello, what's up?");
const greeting2 = createGreeting("Manuel", "Hello, what's up?");
console.log(greeting2);