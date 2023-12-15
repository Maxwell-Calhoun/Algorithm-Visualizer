const swap = async (data, x, y) => {
    var temp = data[x];
    data[x] = data[y];
    data[y] = temp;
    await sleep(1);
};

export const insertionSort = async (dataRef) => {
    let data = dataRef.current;
    let count = 0;
    let sorted = 0;

    for (let ii = 1; ii < data.length; ii++) {
        if (data[sorted] > data[ii]) {
            await swap(data, ii, sorted);
            ii = ii -2;
            sorted--;
            count++;
        } else {
            sorted++;
        }
    }
};

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};