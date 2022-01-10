/* Paginate array */
const paginate = (array: number[], pageSize: number, pageNumber: number) => {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

console.log(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4, 3));
