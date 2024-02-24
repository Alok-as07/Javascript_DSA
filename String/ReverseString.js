
const string = 'Hello';
const stringArray = string.split('');

function reverseString(stringArray) {
    let left = 0;
    let right = stringArray.length - 1;

    while (left < right) {
        let temp = stringArray[left];
        stringArray[left] = stringArray[right];
        stringArray[right] = temp;
        left++;
        right--;
    }

    return stringArray.join('');
}
console.log(reverseString(stringArray))// olleH