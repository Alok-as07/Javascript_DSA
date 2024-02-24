
const string = 'abcdba';
const stringArray = string.split('');

function isPalindrome(stringArray) {
    let Low = 0;
    let High = stringArray.length-1;
    while(Low<High){
        if(stringArray[Low] == stringArray[High]){
            Low++;
            High--;
        }else{
            return 0;
        }
    }
    return 1;
}
console.log(isPalindrome(stringArray))
