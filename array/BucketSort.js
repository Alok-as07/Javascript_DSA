let arr = [11, 9, 21, 8, 17, 19, 13, 1, 24, 12, 21, 22]

function bucketSort(array, bucketSize = 3) {
    if (array.length === 0) {
        return array
    }
    let min = Math.min(...array)
    let max = Math.max(...array)
    let bucketCount = Math.floor((max - min) / bucketSize) + 1

    const buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    for (let i = 0; i < array.length; i++) {
        buckets[Math.floor((arr[i] - min) / bucketSize)].push(array[i]);
    }
    array.length = 0;
    for (let i = 0; i < buckets.length; i++) {
        buckets[i].sort((a, b) => a - b);
        for (let j = 0; j < buckets[i].length; j++) {
            array.push(buckets[i][j])
        }
    }
    return array
}

console.log(bucketSort(arr, 3))