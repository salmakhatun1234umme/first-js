// for loop
// while loop
// do...while
// for...in
// for..of


// for(Infinity;condition;increment/decrement){
//     console.log(Object)
// }




// for(let i = 0; i <= 5; i++){
//     console.log(i)
// }

// for(let i=1; i<=100; i++){
//     console.log(i)
// }


// while(condition;){
//     console.log(Object)
// }

// let i=2;
// while(i<=10){
// console.log(i)
// i++
// }



//  let i=1;
//  while(i<=20){
//     if(i%2===1){
//         console.log(i)
//     }
//     i++
//  }
 


// do{

// }while(condition)

// for(let i=0; i<=5; i++){
//     console.log('salma')
// }

// let i=1;
// do{
//     console.log('salma  khatun')
//     i++
// }

// while(i<=5);
//  let i=1;
//  while(i<=5){
//    console.log('salma')
//     i++
//  }



// for loop diye

// let fruits=['apple','banana', 'orange'];

// for (let i=0; i<fruits.length; i++ ) {
//   console.log(fruits[i])
// }
   


// while loop
// let i=0;
// while(i<fruits.length){
//   console.log(fruits[i])
//   i++
// }


// for loop 

// let numbers=[10,20,40,60,70];
// let sum=0;
// for (let i = 0; i<numbers.length; i++) {
// sum += numbers[i];

// }
// console.log(sum)


// while(i<numbers.length ){
//   sum+=numbers[i]
//   console.log(sum)
//   i++
  
// }



const numbers = [1, 2, 3,4,5,9,8,0,5,7];
let minimum=Math.min(...numbers)
let maximum=Math.max(...numbers)


let text = [];
for (let i = 0; i<numbers.length; i++) {
  text += numbers[i] 
  console.log(text)
}
let reverseNumber=numbers.reverse()

console.log(`${minimum} this is minimum number ${maximum} this is maximum number`)
console.log(reverseNumber)
