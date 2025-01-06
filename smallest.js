
const numbers = [1, 2, 3,4,5,9,8,5,7,-8];
let smallNumber = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallNumber) {
        smallNumber = numbers[i];
    }
}

console.log(smallNumber);
