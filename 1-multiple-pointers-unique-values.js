/**
 * Implement a function called countUniqueValues, which accepts a SORTED array,
 * and counts the unique values in the arrray. There can be negative numbers in the array,
 * but it will always be sorted.
 *
 * countUniqueValues([1,1,1,1,1,2]) // 2
 * countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
 * countUniqueValues([]) // 0
 * countUniqueValues([-2,-1,-1,0,1]) // 4
 */

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  // initialize pointer values
  let slow = 0;
  let fast = 1;
  let uniqueCounter = 1;

  // starting at index values 0 and 1, if the indexes are === we want to add to a unique counter
  // until they are no longer equal and then we want to add again, until we reach the end

  // while fast is less than arr.length - otherwise we wouldn't check the last index
  while (fast < arr.length) {
    // check if the index of slow is equal to the index of fast
    if (arr[slow] === arr[fast]) {
      // if yes, move fast forward and check again
      fast++;
    } else {
      // if no, add to uniqueCounter and move slow to fast, and fast up one.
      uniqueCounter++;
      slow = fast;
      fast++;
    }
  }
  return uniqueCounter;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([])); // 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
// console.log(countUniqueValues([1])); // 1

// ! Colt's suggested approach which I paused before hearing - going to attempt that way, too

function moreUniqueValues(arr) {
  // early exit 0
  if (!arr.length) return 0;

  let slow = 0;
  let fast = 1;

  // use slow as a counter and replace slow's value with fast's value when they're not equal
  while (fast <= arr.length - 1) {
    if (arr[slow] === arr[fast]) {
      // replace slow with fast
      fast++;
    } else {
      slow++;
      arr[slow] = arr[fast];
      fast++;
    }
  }
  return slow + 1;
}

// also works! - i prefer mine though. haha.

console.log(moreUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(moreUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(moreUniqueValues([])); // 0
console.log(moreUniqueValues([-2, -1, -1, 0, 1])); // 4
console.log(moreUniqueValues([1])); // 1

// ! Colt's actual code for his solve. pretty clean!

function coltsSolve(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
