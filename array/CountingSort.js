/*Counting Sort is an efficient algorithm for sorting a collection of objects
 when the range of potential items is known and not too large. */
const array = [1, 0, 3, 1, 2, 5, 3, 5, 3, 4, 2, 1]
function CountingSort(array) {
    if (array.length === 0) {
        return array
    }

    const MaxNumber = Math.max(...array)
    const CountArray = new Array(MaxNumber + 1).fill(0)

    for (let i = 0; i < array.length; i++) {
        CountArray[array[i]] = CountArray[array[i]] + 1;
    }
    array.length = 0;
    for (let i = 0; i < CountArray.length; i++) {
        while (CountArray[i] > 0) {
            array.push(i)
            CountArray[i]--;
        }
    }
    return array;
}

console.log(CountingSort(array)) //output is [0, 1, 1, 1, 2, 2, 3, 3, 3, 4, 5, 5],  Time Complexity  = O(n+k)