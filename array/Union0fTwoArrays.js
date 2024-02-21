const arr1 = [5, 7, 7];
const arr2 = [1, 2, 5, 6, 7];

// this is ok if the array ir sort 
function unionOfArray(arr1, arr2) {
    let L = 0,H = 0,temp = [];
    while (L < arr1.length) {
        if (arr1[L] == arr2[H]) {
            temp.push(arr1[L]);
            L++;
            H++;
        } else if (arr1[L] < arr2[H]) {
            if (arr1[L] == arr1[L - 1] && L != 0) {
                L++;
            } else {
                temp.push(arr1[L]);
                L++;
            }
        } else if (arr1[L] > arr2[H]) {
            if (arr1[L] == arr1[L - 1] && L != 0) {
                L++;
            }else{
                temp.push(arr1[L]);
                L++;
            }
        }
    }
    console.log(temp)
    let i =0 ;

    while(H<arr2.length){
        if (arr2[H] == temp[i]) {
            H++;
            i++;
        } else if (arr2[H] < temp[i]) {
            if (arr2[H] == arr2[H - 1] && H != 0) {
                ++H;
            } else {
                temp.push(arr2[H]);
                ++H;
            }
        } else if (arr2[H] > temp[i]) {
            if (arr2[H] == arr2[H - 1] && H != 0) {
                ++H;
            }else{
                temp.push(arr2[H]);
                ++H;
            }
            i++;
        }
    }
    return temp;
}

// this is predefined function of javascript 
function unionOfArray2(arr1,arr2){
    return Array.from(new Set(arr1.concat(arr2)));
}


console.log(unionOfArray2(arr1,arr2))