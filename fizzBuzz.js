//divisível por 3 - fizz
//divisível por 5 - buzz
//divisível por 3 e 5 - fizzbuzz
//não é numero - 'not a number'
//não divisível por 3 nem por 5 - entre com outro número

function fizzBuzz(entrada){
    if(entrada%3 === 0 && entrada%5 === 0){
        console.log("fizzbuzz");
        return
    }
    if (entrada%3 === 0){
        console.log("fizz");
        return
    }
    if (entrada%5 === 0){
        console.log("buzz");
        return
    }
    if(typeof entrada != 'number'){
        console.log("not a number");
        return
    }
    else{
        console.log(entrada);
    }
}

fizzBuzz(15);
fizzBuzz(9);
fizzBuzz(10);
fizzBuzz('a');
fizzBuzz(4);