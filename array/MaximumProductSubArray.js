const array = [6,-3,-10,0,2]

function MaximumProduct(arr){
    let maxProduct = BigInt(arr[0]);
    let minProduct = BigInt(arr[0]);
    let result = BigInt(arr[0]);

    for(let i =1;i<arr.length;i++){
        if(arr[i]<0){
            [maxProduct,minProduct] = [minProduct,maxProduct]
        }

        maxProduct = BigInt(arr[i]) > maxProduct * BigInt(arr[i]) ? BigInt(arr[i]): maxProduct * BigInt(arr[i]);
        minProduct = BigInt(arr[i]) < minProduct * BigInt(arr[i]) ? BigInt(arr[i]): minProduct * BigInt(arr[i]);
        result = result > maxProduct ? result : maxProduct;
    }

    return result;
    
}


console.log(MaximumProduct(array).toString())