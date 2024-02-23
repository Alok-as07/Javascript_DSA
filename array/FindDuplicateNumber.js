
// Find the Duplicate Number
const array = [1, 4, 2, 2]

function findDuplicate(nums) {

    for (let i = 0; i < nums.length; i++) {
        let value = Math.abs(nums[i]) - 1
        if (nums[value] < 0) {
            return Math.abs(nums[i])
        }
        nums[value] = -nums[value]
    }
    return 0;

}

console.log(findDuplicate(array))