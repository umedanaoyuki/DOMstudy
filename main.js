'use strict';

//プログラムが実行される順序を考えてみる
{
    document.querySelector('input').addEventListener('focus',() => {
        document.querySelector('p').textContent = 'English Only'
    });

    document.querySelector('input').addEventListener('blur',() => {
        document.querySelector('p').textContent = '';
    });    

    document.querySelector('input').focus();    

}