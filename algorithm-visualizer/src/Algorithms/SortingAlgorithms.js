import { speed } from '../Pages/Sorting'

const swap = async (data, x, y) => {
    var temp = data[x];
    data[x] = data[y];
    data[y] = temp;
    await sleep(speed);
};

export const insertionSort = async (data) => {
    let sorted = 0;
    console.log(speed)
    for (let ii = 1; ii < data.length; ii++) {
        if (data[sorted] > data[ii]) {
            await swap(data, ii, sorted);
            ii = ii - 2;
            sorted--;
        } else {
            sorted++;
        }
    }
};

export const mergeSort = async (arr, leftItr, rightItr) => {
    if (leftItr >= rightItr ) {
        // end of recursion
        return;
    }

    // force an int here
    let middle = leftItr + Math.floor((rightItr - leftItr) / 2);

    await mergeSort(arr, leftItr, middle);
    await mergeSort(arr, middle + 1, rightItr);
    return merge(arr, leftItr, rightItr, middle)
}

const merge = async (arr, left, right, middle) => {
    let l = middle - left + 1;
    let r = right - middle;
    
    const tempL = [];
    const tempR = [];
    
    for (let ii = 0; ii < l; ii++) {
        tempL[ii] = arr[left + ii];
    }
    for (let ii = 0; ii < r; ii++) {
        tempR[ii] = arr[middle + 1 + ii];
    }

    var ii = 0;
    var jj = 0;
    var kk = left;

    while (ii < l && jj < r) {
        if (tempL[ii] <= tempR[jj]) {
            await sleep(speed);
            arr[kk] = tempL[ii];
            ii++;
        } else {
            await sleep(speed);
            arr[kk] = tempR[jj];
            jj++;
        }
        kk++;
    }

    while (ii < l) {
        await sleep(speed);
        arr[kk] = tempL[ii];
        kk++;
        ii++;
    }

    while (jj < r) {
        await sleep(speed);
        arr[kk] = tempR[jj];
        kk++;
        jj++;
    }
}
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};