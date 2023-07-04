'use strict';

//プログラムが実行される順序を考えてみる
{
    //ボタン要素取得後 addEventListner
    document.querySelector('button').addEventListener('click',() => {
        document.querySelectorAll('input').forEach((radio) => {

            if (radio.checked == true) {
                alert(radio.value);
                console.log("test");
            }
        });
    });
}