

const array = [-2, 1]

function kadanesAlgo(array){
    let maxsum = array[0],sum = array[0],i=1;

    for(let i =1;i<array.length;i++){
        sum = sum < 0? 0:sum;
        sum+= array[i];
        maxsum = sum > maxsum ? sum : maxsum;
    }

    return maxsum;
}

console.log(kadanesAlgo(array))