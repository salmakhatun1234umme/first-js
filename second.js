  const age=60;
  const isIdCard=true;
  const isCoupon=true;
  let disCount=0;

  if(age>=60 && isIdCard && isCoupon){
    disCount=75;
  }
  else if(age>=60 && isIdCard){
    disCount=50;
  }
  else if(isCoupon){
    disCount=25;
  }
  else if(age<=10){
    disCount=100;
  }
  else{
    disCount=0;
  }

  console.log("Discount", disCount+"%");


const isBoos2=false;
let money=500;

if(isBoos2){
    if(money>=1000){
    money =money/2;
    }
    else{
        money=0; 
    }
}
else{
   money=money+100;
}
// money=isBoos2 ? money>=1000?money=money/2:0 :money+100;
// money=isBoos2 ? money>= 1000?money/2: 0:money+100;
console.log(money)

let mark=33;

mark=mark>=33?console.log('you are pass'):console.log('you are fail')

let num1=65;
let num2=70;
let num3=60;

if(num1>num2 && num1>num3){
  console.log('num1 is bigger');
}
else if(num2>num1&&num2>num3){
  console.log('num2 you are bigger')
}
else{
  console.log('num3 you are bigger')
}

const idPass=false;
login=idPass?console.log('you are login'):'your pass wrong'






const email='admin@gamil.com';
const pass='1234546'
if(email==='admin@gamil.com' && pass==='12345'){
  console.log('you are login')
}
else if(email !=='admin@gamil.com'){
  console.log('your email wrong')
}
else if(pass !=='12345'){
  console.log('your pass wrong')
}
else{
  console.log('you are fail')
}