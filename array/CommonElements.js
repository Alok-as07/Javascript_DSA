A = [1, 5, 10, 20, 40, 80,120]
B = [6, 7, 20, 80, 100,120]
C = [3, 4, 15, 20, 30, 70, 80, 120]


function CommonElement(A,B,C){
    let i=0,j=0,k=0,ans=[],last = Number.MIN_SAFE_INTEGER;
    
    while(i<A.length && j<B.length && k<C.length ){
        if(A[i] == B[j] && B[j] == C[k] && A[i] !== last){
            ans.push(A[i]);
            last = A[i];
            i++;
            j++;
            k++;
        }
        else if(Math.min(A[i],B[j],C[k]) === A[i]){
            i++;
        }else if(Math.min(A[i],B[j],C[k]) === B[j]){
            j++;
        }else{
            k++;
        }
    }
    return ans;
}

console.log(CommonElement(A,B,C))