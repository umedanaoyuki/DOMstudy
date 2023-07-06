'use strict';

//プログラムが実行される順序を考えてみる
{
    document.querySelector('button').addEventListener('click', (e) => {
        document.querySelector('p').style.fontSize = '24px';

    })
}