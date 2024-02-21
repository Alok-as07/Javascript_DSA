

const array = [1,2,5,7,8,6,3]

// This is the Custome coding 
function cyclicRotate(array){
    let temp = array[array.length-1];

    for(let i = array.length-1 ;i>0;i--)
    {
        array[i]=array[i-1];
    }
    array[0]=temp;

    return array
}

// This is done by javascript native function
function cyclicRotateMethod2(array){
    let temp = array.pop();
    array.unshift(temp);
    return array;
}

console.log(cyclicRotateMethod2(array))