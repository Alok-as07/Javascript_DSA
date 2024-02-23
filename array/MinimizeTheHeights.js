
const array = [1 ,8 ,10, 6, 4 ,6 ,9 ,1];

function getMinDiff(arr, n, k) {
    let min=arr[0],max=arr[0];
    for(let i =0 ; i<n;i++){
        if(arr[i]<min){
            min=arr[i];
        }
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return { max,min}
    return (max-k)-(min+k);
}

console.log(getMinDiff(array, 4, 2))