// Your code here

function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity = "go to the office"){
    return (`This Monday, I will ${activity}.`);
}

function wrapAdjective(flair = "*") {
    return function(adj = "special"){
        return `You are ${flair}${adj}${flair}!`;
    }
}

 const Calculator = {
     add(num1, num2) {
        return num1 + num2;
     },
     subtract(num1, num2) {
        return num1 - num2;
     },
     multiply(num1, num2){
        return num1 * num2;
     },
     divide(num1, num2){
        return num1 / num2;
     }
 }

 let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
  }


