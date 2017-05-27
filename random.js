/*
Sometimes it's necessary to generate a random number within a program. We can do that with this code:

Math.random();
This code will return a random number between 0 and 1. JavaScript will generate a random number for us with this code.

To generate a random number between 0 and 50, we could multiply this result by 50, like so:

Math.random() * 50;
The problem with this is that the answer will most likely be a decimal. Luckily, JavaScript has our back with another built in function called Math.floor. Math.floor will take a decimal number, and round down to the nearest whole number. It is used like this:

Math.floor(Math.random() * 50);
In this case:

Math.random will generate a random number between 0 and 1.
We then multiplied that number by 50, so now we have a number between 0 and 50.
Then, Math.floor will round the number down to the nearest whole number.
Let's utilize these two methods to generate a random number between 0 and 100.
*/

console.log(Math.floor(Math.random() * 100))