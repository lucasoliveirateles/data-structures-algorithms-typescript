/* Joining arrays */
const zero = 0;

const positiveNumbers: number[] = [1, 2, 3];
const negativeNumbers: number[] = [-3, -2, -1];

const numbers = negativeNumbers.concat(zero, positiveNumbers);

console.log(numbers);
