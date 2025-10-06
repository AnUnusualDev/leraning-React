

document.addEventListener('DOMContentLoaded', initApp);

function initApp(){
    initializeButtonIds();
    initializeEventListeners();
}

function initializeButtonIds(){
    let buttons = document.querySelectorAll('.calc-button');

    for (let i = 0; i < buttons.length; i++){
        buttons[i].setAttribute('id', `button_${buttons[i].innerHTML}`)
        console.log(`${buttons[i].innerHTML}`)
    }
}

function initializeEventListeners(){
    const btn_equals = document.getElementById('equal-button');
    btn_equals.addEventListener('click', calculate);

    const btn_del = document.getElementById('button_del');
    btn_del.addEventListener('click', deleteCharacter);

    let input = document.getElementById('input-field');
    input.focus();

    let btn_li
}

function calculate(){
    let input = document.getElementById('input-field');
    let appView = document.getElementById('app-view');

    appView.innerHTML += `${eval(input.value)} <br>`;
}

function deleteCharacter(){
    let input = document.getElementById('input-field');
    input.value = input.value.slice(0, input.value.length -1);
}