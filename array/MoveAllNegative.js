const array = [1, -1, 2, 4, -5];
const array2 = [-13, 11, -5, 4, 50, -42, 11];

function moveNumber(nums) {
  // 'j' stores the index of the leftmost positive element.
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      // Current element is negative.
      if (i != j) {
        // Swap the current element with the leftmost positive element.
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }

      ++j;
    }
  }

  return nums;
}
console.log(moveNumber(array2));
