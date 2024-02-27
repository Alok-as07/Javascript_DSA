const array = [1, 3, 5, 2, 3, 2, 2, 5, 2, 2, 2];

function FindMinimumJump(array){
    let numberOfjumps =0;
    let Arraylength = array.length-1;
    let lastidx = 0;
    let coverage=0;
    for(let i=0;i<=Arraylength;i++){
        coverage = Math.max(coverage,i+array[i]);

        if(i==lastidx){
            lastidx = coverage;
            numberOfjumps++;
            if(coverage>=Arraylength){
                return numberOfjumps;
            }
        }
    }
    return -1;
}

console.log(FindMinimumJump(array))