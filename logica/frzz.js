/*Reto de Programación: FizzBuzz
Descripción:

Escribe un programa que recorra los números del 1 al 100 y aplique las siguientes reglas:

Si el número es múltiplo de 3, imprime "Fizz".

Si el número es múltiplo de 5, imprime "Buzz".

Si el número es múltiplo de 3 y 5, imprime "FizzBuzz".

Si no es múltiplo de ninguno, imprime el número tal cual
*/



/*
let counter = 1;
do{  
    if (counter%3 === 0 && counter%5 === 0){
    console.log ("FizzBuzz");
  } else if (counter%5 === 0){
    console.log("Buzz");
   } else if (counter%3 === 0 ){
    console.log("Fizz");
   }else {
    console.log(counter);
    
  }
counter++;
}while (counter <= 100 );*/


const fizzBuzz = (counterNumber) => {
    let counter = 1
do{  
    if (counter%3 === 0 && counter%5 === 0){
    console.log ("FizzBuzz");
  } else if (counter%5 === 0){
    console.log("Buzz");
   } else if (counter%3 === 0 ){
    console.log("Fizz");
   }else {
    console.log(counter);
    
  }
counter++;
}while (counter <= counterNumber);
}
console.log ("200 Veces")
fizzBuzz(200)
console.log ("50 Veces")
fizzBuzz(50)