// Write your code in this file!
const currentUser = "Grace Hopper";

console.log(currentUser);

const welcomeMessage = `Welcome to Flatbook,  ${currentUser}!`; //template literal interpolation
//


console.log(welcomeMessage);

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

console.log(excitedWelcomeMessage);

const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`; // ${currentUser[0]} also works

console.log(shortGreeting);