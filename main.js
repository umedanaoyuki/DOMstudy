'use strict';

//プログラムが実行される順序を考えてみる
{
    //ボタン要素取得後 addEventListner
    document.querySelector('button').addEventListener('click',() => {
        //document.querySelector('p').textContent = 'こんにちは';
        //console.log('test');
        document.querySelector('p').textContent = document.querySelector('button').textContent;
    });

    console.log('Hello');

}