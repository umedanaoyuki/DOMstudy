'use strict';

//プログラムが実行される順序を考えてみる
{
    document.querySelector('input').addEventListener('input',() => {
        const pElement = document.querySelector('p');
        const inputElement = document.querySelector('input');
        pElement.textContent = inputElement.value.length;


        });
}