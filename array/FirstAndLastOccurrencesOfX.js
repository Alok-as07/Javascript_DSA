

const array = [1, 3, 5, 5, 5, 5, 67, 123, 125]


function FirstAndLastOccurrencesOfX(array,target){

    const firstOccurence = findFirstOccurrence(array,target)
    const lastOccurence = findLastOccurrence(array,target)
    return {firstOccurence,lastOccurence};


}

function findFirstOccurrence(array,target){
    let low =0,high = array.length-1;
    let mid = Math.floor(low + (high - low) / 2), result = -1;
    while(low <= high){
    mid = Math.floor(low + (high - low) / 2);
    if(array[mid]=== target){
        result = mid;
        high = mid-1;
    }
    else if(target > array[mid]){
        low = mid+1;
    }else{
        high = mid-1;
    }
}
return result;
}
function findLastOccurrence(array,target){
    let low =0,high = array.length-1;
    let mid = Math.floor(low+(high-low)/2) ,result = -1;
    while(low <= high){
    mid = Math.floor(low + (high - low) / 2);
    console.log(mid)
    if(array[mid]=== target){
        result = mid;
        low = mid+1;
    }
    else if(target > array[mid]){
        low = mid+1;
    }else{
        high = mid-1;
    }

}

    return result;
}


console.log(FirstAndLastOccurrencesOfX(array,5))