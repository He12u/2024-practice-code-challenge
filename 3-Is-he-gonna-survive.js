// ! SOAL : https://www.codewars.com/kata/59ca8246d751df55cc00014c
// function hero(bullets, dragons) {
//   if (bullets >= 2 * dragons) {
//     return true;
//   } else {
//     return false;
//   }
// }

// ! TERNARY
// function hero(bullets, dragons) {
//   // return bullets >= 2 * dragons ? true : false;
//   // sama dengan dibawah
//   return bullets >= 2 * dragons;
// }

// ! FUNCTION EXPRESSION
const hero = (bullets, dragons) => bullets >= 2 * dragons;

console.log(hero(10, 5));
console.log(hero(7, 4));
