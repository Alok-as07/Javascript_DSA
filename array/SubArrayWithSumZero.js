const array = [3 ,-3 ,-4 ,-2, 10]


function subArray(arr){
    let pref_sum =0;
    let tempset = new Set();

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        pref_sum = pref_sum + element;
        if(tempset.has(pref_sum) || arr[i] == 0 || pref_sum == 0){
            return true;
        }

        tempset.add(pref_sum)
    }
    return false;
}

console.log(subArray(array))