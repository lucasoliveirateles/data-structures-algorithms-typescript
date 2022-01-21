// /* In this case, the first element of the array (numbers) is number 1. The number
// 1 is not multiple of 2 (it's an odd number). However, the function isVen return 
// false, and this is the only time the function will be executed. */
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const isEven = (x: number) => x % 2 === 0;

// console.log(numbers.every(isEven));

// /* In this case, we have the method "some" which exhibits the opposite behavior 
// "every", however, the "some" method make the interation to the elements of array 
// until the function return true. */
// console.log(numbers.some(isEven));


import LinkedList from './linked-list/index.ts';

const linked = new LinkedList();

linked.push(15);
linked.push(10);
