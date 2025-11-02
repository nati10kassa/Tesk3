// Netanel kassa &&Nehoray Rabinovich

const numbers = [2, 4, 6, 8, 10, 20, 30, 0];
let count = 0;

for (let i = 0; i < numbers.length; i++) {
  // if the number equalse to 0  add +1 else 0
  count += numbers[i] === 0 ? 1 : 0;
}

console.log("the anount of zero are:", count);
