function mergeSort(arrToBeSorted) {
    // We take an array and return a new sorted array.
    // Thus we first make a shallow copy of the array.
    // We will use two helper functions, a recursive one that keep calling itself
    // until the arr is composed by only one element.
    // The other one will be used to perform the logic of merging the left and right sub-arrays.
    const arrCopy = arrToBeSorted.slice();

    mergeSortRec(arrCopy, 0, arrCopy.length - 1);

    function mergeSortRec(arr, l, r) {
        if (l < r) {
            let middle = Math.floor((r + l) / 2);
            // We keep diving and obtaining sub-arrays on the left
            mergeSortRec(arr, l, middle);
            // Same but sub-arrays on the right
            mergeSortRec(arr, middle + 1, r);
            merge(arr, l, middle + 1, r);
        }
    }

    function merge(arr, l, m, r) {
        // we create the sub arrays corresponding to the indexes
        const subArr_left = arr.slice(l, m);
        const subArr_right = arr.slice(m, r + 1);

        for (let i = 0, j = 0, k = l; k <= r; ++k) {
            if (((subArr_right[j] < subArr_left[i]) && (j < (r - m + 1)))
                || i === (m - l)) {
                arr[k] = subArr_right[j];
                ++j;
            } else {
                arr[k] = subArr_left[i];
                ++i;
            }
        }
    }
    return arrCopy;
}


const arr1 = [3, 2, 1, 13, 8, 5, 0, 1];
const arrSorted1 = mergeSort(arr1);
const arr2 = [105, 79, 100, 110];
const arrSorted2 = mergeSort(arr2);

console.log(arrSorted1);
console.log(arrSorted2);
