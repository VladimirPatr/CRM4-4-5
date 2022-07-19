'use strict';

for (let a = 1; a < 10; a++ ) {
    console.log('______________________')
    for (let m = 1; m < 10; m++ ) {
        let result = Math.pow(a, m);
        console.log(`${a} в степени ${m} = ${result}`)
    }
}