const fibonacci=function(number){
    if(number>0){
        if(number<=2){
            return 1;
        } else{
            return fibonacci(number-1)+fibonacci(number-2);
        }
    }
    else{
        number=number*-1;
        if(number<=2){
            return 1;
        } else{
            return (fibonacci(number-1)+fibonacci(number-2));
        }
    }
}
console.log("fubonacci of 30 if",fibonacci(30));

console.log("fubonacci of -15 if",fibonacci(-15));
