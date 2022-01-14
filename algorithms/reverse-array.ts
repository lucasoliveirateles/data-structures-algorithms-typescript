/* Reverse array */
const input: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reverseArray = (input: number[]): number[] => {
  const array = [];
  
  for(let i = input.length - 1; i >= 0; i--) {
    console.log(input[i]);

    array.push(input[i]);
  }

  return array;
}

const result = reverseArray(input);

console.log(result);
