"use strict";
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
function merge(leftArr, rightArr) {
    const sortedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            sortedArr.push(leftArr[leftIndex]);
            leftIndex++;
        }
        else {
            sortedArr.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }
    return sortedArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}
const arr3 = [4, 9, 12, 6, 2];
console.log(mergeSort(arr3));
