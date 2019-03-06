import Arithmetic from './arithmetic';

const btn = document.querySelector('#btn');
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const arith = new arithmetic.Main();

btn.addEventListener('click', () => {
    output.value = arith.calculate(input.value);
}, false);
