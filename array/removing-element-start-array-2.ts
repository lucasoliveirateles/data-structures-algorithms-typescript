/* Removing element to the end of array */
let numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const reIndex = (array: number[]) => {
  const newArray = [];
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== undefined) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const removeFirstPosition = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  return reIndex(array);
}

numbers = removeFirstPosition(numbers);

console.log(numbers);

numbers.shift();

console.log(numbers);
