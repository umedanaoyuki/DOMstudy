'use strict';

//プログラムが実行される順序を考えてみる
{
    //ボタン要素取得後 addEventListner
    document.querySelector('button').addEventListener('click',() => {
        const colors = [];

        document.querySelectorAll('input').forEach((checkbox) => {

            if (checkbox.checked == true) {
                colors.push(checkbox.value);
            }
        });
        alert(colors.join(','));
    });
}