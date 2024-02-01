// ! SOAL : https://www.codewars.com/kata/57f780909f7e8e3183000078

// function grow(x) {
//   let result = x[0];
//   for (let i = 1; i < x.length; i++) {
//     result = result * x[i];
//   }
//   return result;
// }

// ! IMMUTABILITY REDUCE
// function grow(x) {
//   const result = x.reduce(
//     (previousValue, currentValue) => previousValue * currentValue,
//     1
//   );
//   return result;
// }

// ! FUNCTION EXPRESSION
const grow = (x) =>
  x.reduce((previousValue, currentValue) => previousValue * currentValue, 1);

console.log(grow([1, 2, 3]));
console.log(grow([4, 1, 1, 1, 4]));
console.log(grow([2, 2, 2, 2, 2, 2]));
