// console.log("Greetings!");

/*
1. Pythagorean theorem

The Greek mathematician Pythagoras came up with a way to find the missing side of 
a triangle, and now so we'll we!

The theorem: a^2 + b^2 = c^2

Write a function that will:
    Prompt the user for side a and b.
    Find the length of the missing side c.
    Return the missing side c from the function.
*/

// ***************************** SOLUTION! ***********************************************

// const pythTheorem = () => {
//     let side_a = parseFloat(window.prompt("Enter the length of side a: "));
//     let side_b = parseFloat(window.prompt("Enter the length of side b: "));
//     let hypotenuse = Math.sqrt((side_a**2) + (side_b**2));
//     return hypotenuse;
// }

// console.log(pythTheorem());

/*
2. Ground Control to Major Tom

Major Tom is a space explorer that loves to fly near stars, but always needs to be
careful that the gravity isn't more than his engines can handle! If Major Tom is near
a star he will be pulled towards the star at the stars gravity (g) at an increasing
per second (s). This means that if Major Tom is at a star with a gravity of 30.8 for 10
seconds he'll be falling towards the star at a speed of 308 m/s! Luckily Major Tom's 
engines produce a thrust to overcome up to 400 m/s.

The theorem: g * s < 400

Write a function that will:
    Prompt the user for the stars gravity, and how many seconds they will be there.
    Calculate the speed that the space craft will be going towards the star.
    If Major Tom's engines can overcome the speed return true, else return false.
*/

// ***************************** SOLUTION! ***********************************************

// const starsEscapePossible = () => {
//     let stars_gravity = parseFloat(window.prompt("Enter the star's gravity: "));
//     let time = parseFloat(window.prompt("Enter how long you will be there (seconds): "));
//     let escape_possible = stars_gravity * time;
//     return escape_possible < 400;
// }

// console.log(starsEscapePossible());

/*
3. Shell Game

A shell game is a game in which a person hides an object under three cups, then shuffles
around the cups. The player then tries to guess which cup has the object hidden under it.
We're going to create a shell game using javascript and Math.random().

Write a function that will:
    Randomly pick a number 1-3.
    Prompt the user to select a 1, 2, or 3.
    If the user guesses right let them know!
    If the user guesses wrong execute the function inside of itself.
*/

// ***************************** SOLUTION! ***********************************************

// const shellGame = () => {
//     let shell = Math.floor(Math.random()*3) + 1;
//     let guess = parseInt(window.prompt("Is the object under shell #1, 2, or 3?"));
//     if (shell == guess) {
//         alert(`You guessed correctly! The object is under shell #${shell}!`);
//     }

//     shellGame();
// }

// (shellGame());

/*
4. The worst calculator

There is nothing like a calculator that you can only use once, but that's exactly what we're
going to make!

Write a function that will:
    Prompt the user for two numbers.
    Prompt the user if they would like to add, subtract, divide, or multiply these numbers.
    Return the answer from the function.
*/

// ***************************** SOLUTION! ***********************************************


// const calculator = () => {
//     let first_value = parseFloat(window.prompt("Enter the first value: "));
//     let second_value = parseFloat(window.prompt("Enter the second value: "));
//     let operation = window.prompt("Add, Subtract, Multiply, Or Divide? ").toLowerCase();

//     if (operation == "add") {
//         return first_value + second_value;
//     }

//     if (operation == "subtract") {
//         return first_value - second_value;
//     }

//     if (operation == "multiply") {
//         return first_value * second_value;
//     }

//     if (operation == "divide") {
//         return first_value / second_value;
//     }
// }

// console.log(calculator());

/*
5. RPG Combat!

Every now and then a skeleton just needs to be taken out. 

Write a function that will:
    take a number representing the health of the skeleton, and a number representing the health of the player.
    Prompt the user if they would like to attack, or heal.
        If the player chooses attack, deal 5 damage to the skeleton
        If the player chooses to heal, restore 3 HP to the player's health.
    Deal 5 damage to the player.
    If the skeleton is dead, return "You won!" from the function.
    If the player is dead, return "You lose!" from the function.
    If neither state is true, call the function into itself with the new health amounts.
*/

// const encounter = (skeleton_health, player_health) => {
//     let decision = window.prompt("Select A to attack or H to heal: ").toUpperCase();

    
//     if (decision == "A") {
//         skeleton_health -= 5;
//         // alert(`Skeleton Health ${skeleton_health}`);
//         // alert(`Player Health ${player_health}`);

//     }

//     if (decision == "H") {
//         player_health += 3;
//         // alert(`Skeleton Health ${skeleton_health}`);
//         // alert(`Player Health ${player_health}`);


//     }

//     player_health -= 5;

//     if (skeleton_health <= 0) {
//         return "You won!";
//     }

//     if (player_health <= 0) {
//         return "You lose!"
//     }

//     // return is happening multiple func deep, need return to get returns out
//     // keeps running recursively and has return, need to have return when calling recursively, if you're
//     // gonna end my function recursively
//     return encounter(skeleton_health, player_health);


// }

// console.log(encounter(10,15));

/*
6. Messages Recieved

You've recieved a few messages, but the last two letters of each message are suppose to be on the front! See if you
can write a function to unscramble this mess.

Input:
    nyonca
    netreepi
    ad setshe
    ogrammingpr

Write a function that will:
    Take a string as an input
    Return a string in the right order.
*/


// ***************************** SOLUTION! ***********************************************

// const unscramble = (word) => {




//     let split_word = word.split('');
    
//     // remove last 2 letters from the array
//     let remove_letters = split_word.splice(word.length-2, 2);

//     return remove_letters.join('') + split_word.join('');
// }

// console.log(unscramble('nyonca'));
// console.log(unscramble('netreepi'));
// console.log(unscramble('ad setshe'));
// console.log(unscramble('ogrammingpr'));
