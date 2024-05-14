/* Given an array arr of size n and an integer X. Find if there's a triplet in the array which sums up to the given integer X. */

const array = [1 ,4 ,45 ,6 ,10 ,8]
const X = 13;

function FindTriplet(A,X){
    let result = []

    A = A.sort((a, b) => a - b);
    console.log(A);
    for (let i = 0; i < A.length; i++) {
        let l = i+1;
        let r = A.length - 1
        while(l<r){
            if(A[i]+A[l]+A[r] === X){
                result.push(A[i],A[l],A[r])
                break
            }else if(A[i]+A[l]+A[r] < X){
                l++;
            }else{
                r--;
            }
        }
        
    }

    console.log(result);
}

FindTriplet(array,X)