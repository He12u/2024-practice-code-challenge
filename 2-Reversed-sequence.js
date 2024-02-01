// const reverseSeq = (n) => {
//   let result = [];
//   for (let i = 0; i < n; i++) {
//     result.push(n - i);
//   }
//   return result;
// };

const reverseSeq = (n) => {
  return Array(n)
    .fill()
    .map((el, i) => n - i);
};

console.log(reverseSeq(5));
