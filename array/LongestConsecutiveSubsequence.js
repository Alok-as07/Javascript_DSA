const array = [2,6,1,9,4,5,3]


function LongestConsecutive(arr){
    const arrset = new Set();
    let count = 1;
    let maxCount =1;
    for (let i = 0; i < arr.length; i++) {
        arrset.add(arr[i])
        console.log(arr[i])
    }

    for(const value of arrset){
        if(arrset.has(value-1)){
            count = 1;
        }else{
            let i = value;
            while(arrset.has(i+1) != false){
                console.log(i,arrset.has(i+1),count)
                count++;
                i++;
            }
            if(count > maxCount){
                maxCount = count;
            }
            count = 1;
        }
    }
    console.log(maxCount)
    return maxCount
}

LongestConsecutive(array)