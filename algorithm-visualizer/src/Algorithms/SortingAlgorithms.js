import { speed } from '../Pages/Sorting'

const swap = async (data, x, y) => {
    var temp = data[x];
    data[x] = data[y];
    data[y] = temp;
};

export const insertionSort = async (data, dataState) => {
    let itr = 0;
    let value = 0;
    for (let ii = 1; ii < data.length; ii++) {
        itr = ii - 1;
        value = data[ii];
        while (itr >= 0 && value < data[itr]) {
            await swap(data, itr,itr + 1);
            // active number being sorted
            dataState[itr] = 1;
            // number that is sorted
            dataState[itr + 1] = 2;
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
    return await merge(arr, leftItr, rightItr, middle, dataState)
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

export const quickSort = async (data, dataState, low, high) => {
    if (low < high) {
        let pivot = await partition(data, dataState, low, high);
        await quickSort(data, dataState, low, pivot - 1);
        await quickSort(data, dataState, pivot + 1, high);
    }
}

const partition = async (data, dataState, low, high) => {
    let pivot = data[high];
    let newPivot = low - 1;

    for (let ii = low; ii < high; ii++) {
        // active number being sorted
        dataState[ii] = 1;
        if (pivot > data[ii]) {
            newPivot++;
            dataState[newPivot] = 2;
            
            await swap(data, newPivot, ii);
            await sleep(speed);
            //[data[newPivot], data[ii]] = [data[ii], data[newPivot]]
        }
    }

    newPivot++;
    dataState[newPivot] = 2;
    dataState[high] = 2;
    await swap(data, newPivot, high);
    await sleep(speed);
    return newPivot;
}

export const heapSort = async (data, dataState) => {
    let n = data.length;
    for (let ii = Math.floor(n / 2); ii >= 0; ii--) {
        await heapify(data, dataState, n, ii);
    }

    for (let ii = n - 1; ii > 0; ii--) {
        dataState[ii] = 2;
        await swap(data, ii, 0);
        await sleep(sleep);
        await heapify(data, dataState, ii, 0);
    }
}

const heapify = async (data, dataState, n, node) => {
    let largestNode = node;
    let leftNode = 2 * node + 1;
    let rightNode = 2 * node + 2;
    
    if (rightNode < n && data[largestNode] < data[rightNode]) {
        largestNode = rightNode;
    }

    if (leftNode < n && data[largestNode] < data[leftNode]) {
        largestNode = leftNode;
    }

    if (largestNode !== node) {
        await swap(data, largestNode, node);
        dataState[largestNode] = 1;
        dataState[node] = 1;
        await sleep(sleep);
        await heapify(data, dataState, n, largestNode);
    }
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};