'use strict';

//プログラムが実行される順序を考えてみる
{
    document.addEventListener('keydown',(e) => {
        document.querySelector('p').textContent = e.key;

    });


}