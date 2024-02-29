

function CountSquare(N){
    if(N==1){
        return 0;
    }
    let i=0,j=1;
    while(i<N){
        i=j;
        i=i*i;
        if(i>=N){
            break;
        }
        j++;
    }
    return j-1;
}

console.log(CountSquare(26))