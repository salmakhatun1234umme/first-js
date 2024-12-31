const baby=6;
const oldMan=50;
const coponCart=true;
const isIdCard=true;
const buy=400;
if(baby<=5){
    console.log('baby you are free')
}
else if(oldMan<=50 && isIdCard==true){
    console.log('old man you are free')
}
else if(coponCart==true){
   const disCount=buy*10/100;
   const pay=buy-disCount;
   console.log(pay);
}
else{
    console.log('pay your food bill');
}


// ternary operator
let price=400;
const isBoos=false;
const pay=isBoos==true?price=0:price+100;
console.log(pay);