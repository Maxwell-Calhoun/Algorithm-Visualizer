import { speed } from '../Pages/Sorting'

const swap = async (data, x, y, dataState) => {
    var temp = data[x];
    data[x] = data[y];
    data[y] = temp;
    // active number being sorted
    dataState[x] = 1;
    // number that is sorted
    dataState[y] = 2;
};

export const insertionSort = async (data, dataState) => {
    let itr = 0;
    let value = 0;
    for (let ii = 1; ii < data.length; ii++) {
        itr = ii - 1;
        value = data[ii];
        while (itr >= 0 && value < data[itr]) {
            swap(data, itr,itr + 1, dataState);
            await sleep(speed);
            itr--;
        }
        // sets the color to sorted after loop
        dataState[itr + 1] = 2;
    }
};

export const mergeSort = async (arr, leftItr, rightItr, dataState) => {
    if (leftItr >= rightItr ) {
        // end of recursion
        return;
    }

    // force an int here
    let middle = leftItr + Math.floor((rightItr - leftItr) / 2);

    await mergeSort(arr, leftItr, middle, dataState);
    await mergeSort(arr, middle + 1, rightItr, dataState);
    return merge(arr, leftItr, rightItr, middle, dataState)
}

const merge = async (arr, left, right, middle, dataState) => {
    let l = middle - left + 1;
    let r = right - middle;
    
    const tempL = [];
    const tempR = [];
    
    for (let ii = 0; ii < l; ii++) {
        tempL[ii] = arr[left + ii];
        // will highlight the section that is currently being sorted
        dataState[left+ii] = 1;
    }
    for (let ii = 0; ii < r; ii++) {
        tempR[ii] = arr[middle + 1 + ii];
        dataState[middle + 1 + ii] = 1;
    }

    var ii = 0;
    var jj = 0;
    var kk = left;

    while (ii < l && jj < r) {
        // will lighten the section of the portion that is sorted
        dataState[kk] = 2;
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
        dataState[kk] = 2;
        await sleep(speed);
        arr[kk] = tempL[ii];
        kk++;
        ii++;
    }

    while (jj < r) {
        dataState[kk] = 2;
        await sleep(speed);
        arr[kk] = tempR[jj];
        kk++;
        jj++;
    }
}
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};