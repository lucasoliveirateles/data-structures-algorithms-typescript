/* Remove duplicate data 1 */
const array: string[]= ['apple', 'orange', 'lemon','orange'];

const obj: string[] = [];

for (let i = 0; i < array.length; i++) {
  const item = array[i];
  
  if (obj.indexOf(item) < 0) obj.push(item);
}

console.log(obj);

/* Remove duplicate data 2 */
const filter = array.filter((value, index) => array.indexOf(value) === index);

console.log(filter);