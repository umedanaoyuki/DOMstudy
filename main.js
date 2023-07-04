'use strict';

//プログラムが実行される順序を考えてみる
{
    //ボタン要素取得後 addEventListner
    document.querySelector('button').addEventListener('click',() => {
        if (document.querySelector('p').classList.contains('pink-bg') == false) {
            document.querySelector('p').classList.add('pink-bg');
        } else {
            document.querySelector('p').classList.remove('pink-bg');
        }
    });

    console.log('Hello');

}