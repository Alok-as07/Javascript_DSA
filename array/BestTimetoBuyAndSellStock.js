const prices = [4,2,1,7]

function maxProfit(prices){
    let profit =0,j=0,i=1,diff=0;

    while(i<prices.length){
        if(prices[i]<prices[j]){
            j=i;
            ++i;
        }else{
            console.log(prices[i],prices[j])
            diff = prices[i]-prices[j];
            if(diff>profit){
                profit = diff;
                i++;
            }else{
                i++;
            }
        }
    }
    return { profit,i,j};
}

console.log(maxProfit(prices))