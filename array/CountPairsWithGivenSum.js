const array1 = [1,5,7,1];
const array2 = [
    48, 24, 99, 51, 33, 39, 29, 83, 74, 72, 22,
    46, 40, 51, 67, 37, 78, 76, 26, 28, 76, 25,
    10, 65, 64, 47, 34, 88, 26, 49, 86, 73, 73,
    36, 75,  5, 26,  4, 39, 99, 27, 12, 97, 67,
    63, 15,  3, 92, 90
    ];

function CountPairsWithGivenSum(arr,k){
    let result = 0;
    let tempMap =  new Map();
    for(let i = 0;i<arr.length;i++){
        const diff = k-arr[i];
        if(tempMap.has(diff) && tempMap.get(diff) !=0){
            result = result + tempMap.get(diff);
        }
        tempMap.set(arr[i],(tempMap.get(arr[i]) || 0)+1);
        
    }
    return result;
}
console.log(CountPairsWithGivenSum(array1,6))  //the output is 2
console.log(CountPairsWithGivenSum(array2,50))  //the output is 7