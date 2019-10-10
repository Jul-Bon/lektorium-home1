// Дан масив чисел (положительных, отрицательных и в перемешку)
// Найти max, min, sum
// Нельзя использовать методы массива, а только циклы for, while*
// Примеры массивов:
// [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]
// [-1,-8,-2]
// [1,7,3]
// [1,undefined,3,5,-3]
// [1,NaN,3,5,-3]

let arr = [1, 7, 3],
    max = Number.MIN_SAFE_INTEGER, //-Infinity
    min = Number.MAX_SAFE_INTEGER; //Infinity

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log('Sum:' + sum);
console.log('Min number:' + min);
console.log('Max number:' + max);