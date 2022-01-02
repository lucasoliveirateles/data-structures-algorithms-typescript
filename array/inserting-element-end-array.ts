/* Inserting a element to the end of array */
const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers[numbers.length] = 10;

console.log(numbers);

numbers.push(11);
numbers.push(12, 13);

console.log(numbers);
