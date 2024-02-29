

function MiddleOFThree(A,B,C){

    if(A>=B && A<=C || A>=C && A<=B){
        return A
    }else if(B>=A && B<=C || B>=C && B<=A){
        return B
    }else return C;
}

console.log(MiddleOFThree(978,518,300))