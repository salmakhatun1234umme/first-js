const numbers = [1, 2, 3,4,5,9,8,5,7,15,55];
let reverseNumber = [];
for(let i=numbers.length-1;i>=0; i--){
    reverseNumber.push(numbers[i])
}
console.log(reverseNumber);