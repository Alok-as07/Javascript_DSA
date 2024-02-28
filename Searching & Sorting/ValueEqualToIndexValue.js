
const array = [15, 2, 45, 12, 5];

function valueEqualtoIndex(array){
    let result = [];
    for(let i=0;i<array.length;i++){
        if(array[i] == i+1){
            result.push(array[i]);
        }
    }
    return result;
}

console.log(valueEqualtoIndex(array))