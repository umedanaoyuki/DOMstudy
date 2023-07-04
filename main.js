'use strict';

//プログラムが実行される順序を考えてみる
{
    //ボタン要素取得後 addEventListner
    document.querySelector('button').addEventListener('click',() => {
        const liElement = document.createElement('li');
        liElement.textContent = 'Hanako';
        document.querySelector('ul').appendChild(liElement); 

        if (confirm('Are you Sure?') === true) {
        document.querySelector('#second').remove();}
        })
    console.log('Hello');
};