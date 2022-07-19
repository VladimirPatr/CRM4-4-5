'use strict';


const enterWord = prompt('Введите предложение', '');

const reverseWord = () => {
    let reverse = "";
    for ( let i = enterWord.length - 1; i >= 0; i--) {
        reverse += enterWord[i];
    }
    console.log(reverse);
    return reverse
};

reverseWord()

