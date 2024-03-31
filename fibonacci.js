function fibs(n) {
    // returns an array containing the first n elements of the fibonacci sequence
    // The first two items in the sequence are considered to be 0 and 1.
    const arr = [];
    if (n > 0)
        arr.push(0);
    if (n > 1)
        arr.push(1);

    for (let i = 2; i < n; ++i) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr;
}

// This fibonacci implementation aims to be tail recursive
// Since the last thing the recursive function does it to call itself
// We can conclude it is optimized.
// However, since node does not allow tail recursion optimization we can't really tell if it is really working...

function fibsRecTailRec(n) {
    const arr = [];
    if (n > 0)
        arr.push(0);
    if (n > 1)
        arr.push(1);
    if (n > 2)
        fibHelperTail(n, 1, 1);

    function fibHelperTail(n, a, b) {
        arr.push(b);
        if (n === 3) {
            return b;
        }
        return fibHelperTail(n - 1, b, a + b);
    }

    return arr;
}

// This fibonacci implementation is not tail recursive because the last line of the function
// is not the call to the function itself, rather is the sum of two function calls.
function fibsRec(n) {
    const arr = [];
    if (n > 0)
        arr.push(0);
    if (n > 1)
        arr.push(1);

    helperFib(n, arr);

    return arr;

    // this helper function takes two parameters
    // one the fibonacci index and the array that keeps track of the previous calculated
    // fibonacci values in order to have memoization
    function helperFib(n, arr) {
        if (n - 1 < arr.length)
            return arr[n - 1];
        result = helperFib(n - 2, arr) + helperFib(n - 1, arr);
        arr.push(result);
        return result;
    }
}

// Don't use a value greater than 10000 even if the output is not being logged!
let n = 8;
console.log(fibs(n));
console.log(fibsRec(n));
console.log(fibsRecTailRec(n));
