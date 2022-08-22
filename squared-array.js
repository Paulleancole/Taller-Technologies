function squaredArray(inputArray) {
    let finalArray = inputArray.map(a => a * a);
    finalArray = finalArray.sort((a, b) => a - b);
    return finalArray;
}
var initialArray = [-10, -5, 0, 5, 10];
console.log(squaredArray(initialArray));