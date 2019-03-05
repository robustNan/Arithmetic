import Arithmetic from './arithmetic';

const btn = document.querySelector('#btn');
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const arithmetic = new Arithmetic();

btn.addEventListener('click', () => {
    output.value = arithmetic.calculate(input.value);
}, false);