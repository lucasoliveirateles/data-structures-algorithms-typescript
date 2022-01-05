/* Inserting a element to the start of array */
const numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const insertFirstPosition = (value: number) => {
  for (let i = numbers.length; i >= 0; i--) {
    numbers[i] = numbers[i - 1];
  }

  numbers[0] = value;
};

insertFirstPosition(-1);

console.log(numbers);

numbers.unshift(-2);
numbers.unshift(-3, -4);

console.log(numbers);
