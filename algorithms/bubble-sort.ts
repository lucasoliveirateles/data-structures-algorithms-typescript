const array = [80, 60, 40, 20];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length - 1; j++) {
    if (array[j] > array[j +1]) {
      const next = array[j +1];

      array[j + 1] = array[j];
      array[j] = next;
    }
  }
}

console.log(array);
