const array = [1,1,1,2,2,2,3,3,3,4,4,4,5,5]

function FourSumNumber(nums,target){
    let AnswerArray =[];

    for(let i =0;i<nums.length;i++){
        if(i>0 && nums[i] == nums[i-1]) continue;
        for(let j=i+1;j<nums.length;j++){
            if(j>i+1 && nums[j] == nums[j-1]) continue;
            let k=j+1;
            let l=nums.length-1;
            while(k<l){
                let sum = nums[i];
                sum += nums[j]; 
                sum += nums[k]; 
                sum += nums[l]; 
                if(sum == target)
                {
                    AnswerArray.push([nums[i],nums[j],nums[k],nums[l]])
                    k++;
                    l--;
                    while(k<l && nums[k] == nums[k-1]) k++;
                    while(k<l && nums[l] == nums[l+1]) l++;
                }
                else if(sum<target) k++;
                else l--;
            }
        }
    }
    return AnswerArray;  
}

console.log(FourSumNumber(array,8))  //   [ [ 1, 1, 1, 5 ], [ 1, 1, 2, 4 ], [ 1, 1, 3, 3 ], [ 1, 2, 2, 3 ] ] 