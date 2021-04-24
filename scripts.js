console.log("Greetings!");

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

// function pythTheorem() {
//   let a = +prompt("side 1");
//   let b = +prompt("side 2");
//   let a2 = a**2;
//   let b2 = b**2;
//   let c2 = b2 + a2;
//   let c = Math.sqrt(c2);
//   alert(c);
// }

// pythTheorem();

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

// const starEscapePossible = () => {
//     let g = +prompt("Star Gravity");
//     let s = +prompt("Seconds");
//     let gxs = g*s;
//     if (gxs < 400) {
//       alert("True");
//     } else if ( gxs >= 400) {
//       alert("False")
//     }
// }

// starEscapePossible();

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

// const shellGame = () => {
//   let  input = prompt("Pick a Number 1-3")
//   let num = (Math.floor(Math.random() * (3 - 1 + 1)) + 1);
//   if (input == num) {
//     alert("You are correct")
//   } else {
//     shellGame();
//   }
// }

// shellGame();

/*
4. The worst calculator

There is nothing like a calculator that you can only use once, but that's exactly what we're
going to make!

Write a function that will:
    Prompt the user for two numbers.
    Prompt the user if they would like to add, subtract, divide, or multiply these numbers.
    Return the answer from the function.
*/

// const calculator = () => {
//   let num1 = +prompt("Num 1");
//   let num2 = +prompt("Num 2");
//   let op = prompt("add, subtract, divide, or multiply these numbers");
//   if (op = "add") {
//     alert(num1+num2);
//   }else if (op = "subtract") {
//     alert(num1-num2);
//   }else if (op = "divide") {
//     alert(num1/num2);
//   }else if (op = "multiply") {
//     alert(num1*num2);
//   }

// }

// calculator();

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


// const encounter = (playerHealth,skelliHealth) => {
//     let turnAction = prompt("Would you like to 'Attack' or 'Heal'");
//     if (turnAction == "Attack") {
//       skelliHealth = skelliHealth-5;
//       alert("Skelli HP " + skelliHealth);
//       alert( "Player HP " + playerHealth);
//     } else if (turnAction == "Heal") {
//       playerHealth = playerHealth + 3;
//       alert("Skelli HP " + skelliHealth);
//       alert( "Player HP " + playerHealth);
//     }
//     playerHealth = playerHealth - 5;
//     alert("You have taken 5 damage your HP is now: " + playerHealth);
//     if (skelliHealth <= 0) {
//       alert("You won!");
//     } else if (playerHealth <= 0) {
//       alert("You lost!");
//     } else {
//       encounter(playerHealth,skelliHealth);
//     }
// }

// encounter(10,20);



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

// function unscramble() {
//   let word = prompt("enter word");
//   alert(word);
//   wordlengthno2 = (word.length)-2;
//   alert(wordlengthno2);
//   last2 = word.slice(-2);
//   halfword = word.slice(0,wordlengthno2);
//   alert(halfword);
//   fullword = last2 + halfword;
//   alert(fullword);
// }

// unscramble();
