/**Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop. */

function checkPrime(start) {
    let i = 2;

    while (i < start) {
        if (start % i === 0) return false;
        i++;
    }
return true;
}
//3 -> 4
function findNextPrimeNumber(startingNum) {
    //3
    let starting = startingNum + 1; //4

    while (starting) {
        if (checkPrime(starting)) {
            break;
        }
        starting++;
    }
    return starting;
}

console.log(findNextPrimeNumber(3));
