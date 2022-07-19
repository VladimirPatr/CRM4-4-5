'use strict';


const enterNumber =  parseInt(prompt('Введите число', '')) ;
let answer = "Это простое число";

const isPrime = ()=> {
    for (let i = 2; i < enterNumber; i++) {
        if (enterNumber%i == 0) {
            answer = "Это непростое число";
            break; 
        }
    }
    console.log(answer);
}

isPrime()