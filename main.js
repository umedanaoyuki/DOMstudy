'use strict';

{

    //push,pop,unshift,shift
    const scores =  [70, 90, 80, 85,];

    scores.push(100,200);

    //値の再代入がされるため、letにする
    let sum = 0;
    scores.forEach((score) => {
         //console.log(`${index}: ${score}`);
         sum = sum + score;
    });

    console.log(`Sum: ${sum}`);
    
}
