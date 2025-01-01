const baby=6;
const oldMan=60;
const couponCart=true;
const isIdCard=true;
const buy=400;
if(baby<=5){
    console.log('baby you are free')
}
else if(oldMan>=60 && isIdCard==true){
    const disCount=buy*50/100;
    const pay=buy-disCount;
    console.log(`${pay} old Man pay your bil` )
}
else if(couponCart==true){
   const disCount=buy*25/100;
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

