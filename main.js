'use strict';

//プログラムが実行される順序を考えてみる
{
    //ボタン要素取得後 addEventListner
    document.querySelector('button').addEventListener('click',() => {
        document.querySelector('p').classList.add('pink-bg', 'red-border');
        document.querySelector('p').classList.remove('green-color');
    });

    console.log('Hello');

}