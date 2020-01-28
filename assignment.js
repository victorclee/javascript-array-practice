numbers = [12.45, 3.3, 0.26, 10, 25];
multiplier = 1.25;
const filteredNumbers = numbers.filter((price, index, prices) => {
  return price > 5;
});
console.log(filteredNumbers);

const adjustedNumbers = numbers.map(val => ({ num: val }));

console.log(adjustedNumbers);

const product = numbers.reduce(
  (prevValue, curValue) => prevValue * curValue,
  1
);

console.log(product);

// const sortNumbers = numbers => {
//   const sortedNumbers = numbers.sort((b, a) => {
//     if (a > b) {
//       return 1;
//     } else if (a === b) {
//       return 0;
//     } else {
//       return -1;
//     }
//   });
//   console.log(sortedNumbers);
// };

// sortNumbers(numbers);

function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}

console.log(findMax(...numbers));

function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
}

const [min, max] = findMinMax(...numbers);
console.log(min, max);

const userIds = new Set();
userIds.add(12);
userIds.add(12);
userIds.add(12);
userIds.add(12);
userIds.add(12);
userIds.add(1);
console.log(userIds);
