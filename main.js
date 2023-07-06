'use strict';

//プログラムが実行される順序を考えてみる
{
    document.addEventListener('mousemove',(e) => {
        document.querySelector('p').textContent = `X: ${e.clientX} Y: ${e.clientY}`;
    });
}