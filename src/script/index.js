import '../style/index.styl';
const btn = document.querySelector('#btn');
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const math = new arithmetic.Math();
const enterCode = 13;
const escCode = 27;

btn.addEventListener('click', () => {
    if (input.value) output.innerText = math.calculate(input.value);
    return undefined;
}, false);

document.addEventListener('keydown', e => {
    switch (e.keyCode) {
        case enterCode:
            if (input.value) output.innerText = math.calculate(input.value);
            break;
        case escCode:
            input.value = '';
            output.innerText = 0;
            break;
        default:
            break;
    }
    return undefined;
}, false);
