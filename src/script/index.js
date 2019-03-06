const btn = document.querySelector('#btn');
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const math = new arithmetic.Math();

btn.addEventListener('click', () => {
    output.value = math.calculate(input.value);
}, false);
