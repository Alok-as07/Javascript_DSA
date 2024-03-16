//Minimum swaps required bring elements less equal K together

const array = [1, 2, 7, 2, 3]


function FindminSwap(arr, k) {
    let favorable = 0, minswap = Number.MAX_SAFE_INTEGER, swap = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= k) {
            favorable++;
        }
    }

    console.log("favorable===>",favorable)
    let unfavorable = 0;
    for (let i = 0; i < favorable; ++i) {
        if (arr[i] > k) {
            ++unfavorable;
        }
    }
    console.log("unfavorable===>",unfavorable)

    minswap = unfavorable;

    for (let i = 0, j = favorable; j < arr.length; ++i, ++j) {
        if (arr[i] > k) {
            --unfavorable
        }

        if (arr[j] > k) {
            ++unfavorable;
        }

        minswap = Math.min(minswap, unfavorable)
    }


    return minswap;
}


console.log(FindminSwap(array, 3))