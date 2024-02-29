



const findPairGivenDifference = (arr, diff) => {
    let i = 0, j = 1;
    while(i<arr.length && j<arr.length){
        if(arr[j]-arr[i]===diff && i!=j){
            return [arr[i],arr[j]];
        }else if(arr[j]-arr[i] <diff){
            j++;
        }else{
            i++;
            if(i==j){
                j++;
            }
        }
    }
    return -1;
}

const array = [1, 8, 30, 40, 100];
const diff = 60;
console.log(findPairGivenDifference(array, diff)) // [40,100]