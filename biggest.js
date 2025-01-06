const numbers = [1, 2, 3,4,5,9,8,5,7,15];
let biggestNumber = numbers[0];

for (let i =1; i < numbers.length; i++) {
    if (numbers[i] > biggestNumber) {
        biggestNumber = numbers[i];
    }
}

console.log(biggestNumber);


