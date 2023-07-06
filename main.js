'use strict';

//プログラムが実行される順序を考えてみる
{
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        document.querySelector('p').textContent = document.querySelector('input').value;
    

    })
}