//Loop through all numbers from 1 to 100.
//If a number is divisible by 3, log “Fizz.”
//If a number is divisible by 5, log “Buzz.”
//If a number is divisible by both 3 and 5, log “Fizz Buzz.”
//If a number is not divisible by either 3 or 5, log the number.

function fizzbuzz(number) {
for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log ("fizz buzz", i);
    } else if (i % 5 === 0){
        console.log("buzz", i);
    } else if (i % 3 === 0){
        console.log("fizz", i);
    } else {
        console.log(i);
    }
  }
}
console.log(fizzbuzz(100));