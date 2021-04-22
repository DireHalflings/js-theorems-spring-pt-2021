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

const pythTheorem = () => {};

console.log(pythTheorem());

/*
2. Ground Control to Major Tom

Major Tom is a space explorer that loves to fly near stars, but always needs to be
careful that the gravity isn't more than his engines can handle! If Major Tom is near
a star he will be pulled towards the star at the stars gravity (g) at an increasing
per second (s). This means that if Major Tom is at a star with a gravity of 30.8 for 10
seconds he'll be falling towards the star at a speed of 308 m/s! Luckily Major Tom's 
engines produce a thrust to overcome 400 m/s.

The theorem: g * s < 400

Write a function that will:
    Prompt the user for the stars gravity, and how many seconds they will be there.
    Calculate the speed that the space craft will be going towards the star.
    If Major Tom's engines can overcome the speed return true, else return false.
*/

const starEscapePossible = () => {};

console.log(starEscapePossible);

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

const shellGame = () => {};

console.log(shellGame());

/*
4. The worst calculator

There is nothing like a calculator that you can only use once, but that's exactly what we're
going to make!

Write a function that will:
    Prompt the user for two numbers.
    Prompt the user if they would like to add, subtract, divide, or multiply these numbers.
    Return the answer from the function.
*/

const calculator = () => {};

console.log(calculator());

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

const encounter = () => {};

console.log(encounter());

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

const unscramble = (word) => {};

console.log(unscramble("nyonca"));
console.log(unscramble("netreepi"));
console.log(unscramble("ad setshe"));
console.log(unscramble("ogrammingpr"));
