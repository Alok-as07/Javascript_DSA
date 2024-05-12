/* Given an array of size n and an integer k, find all elements in the array that appear more than n/k times.  */

const array = [3 ,1, 2, 2 ,1 ,2 ,3 ,3];

function FindMoreThanGivenOccurence(array,k){
    const uniqueMap = new Map();
    const ratio = array.length/k;
    const resultArray = [];
    for (let i = 0; i < array.length; i++) {
        if(uniqueMap.has(array[i])){
            const count = uniqueMap.get(array[i])
            uniqueMap.set(array[i],count+1)
        }else{
            uniqueMap.set(array[i],1)
        }
    }

    for(let [key,value] of uniqueMap.entries()){
        if(value>ratio){
            resultArray.push(key)
        }
    }

    console.log(resultArray)
}

FindMoreThanGivenOccurence(array,4)