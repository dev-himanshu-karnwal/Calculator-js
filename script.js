let isInvalid = false;

const expression = document.querySelector('input');

const addChar = function (char) {
  if (isInvalid) {
    expression.value = char;
    isInvalid = false;
  }
  else
    expression.value += char;
}
const clearInput = () => expression.value = ''
const backspace = () => expression.value = expression.value.slice(0, -1);
const calculate = function () {
  const old = expression.value;

  try {
    expression.value = eval(old);
  } catch (e) {
    expression.value = 'Invalid Expression';
    isInvalid = true;
  }
}


document
  .querySelector('.calculator')
  .addEventListener('click', (e) => {

    console.log(e.target);
    const classes = e.target.closest('.btn').classList;
    if (classes.contains('clear'))
      clearInput();

    if (classes.contains('add'))
      addChar(e.target.textContent);

    if (classes.contains('back'))
      backspace();

    if (classes.contains('cal'))
      calculate();
  });

document
  .addEventListener('keydown', (e) => {
    const possible = '1234567890+-/*.';
    if (possible.includes(e.key))
      addChar(e.key);

    if (e.key === 'Backspace')
      backspace();

    if (e.key === 'Enter')
      calculate();

    if (e.key === 'Escape')
      clearInput();
  })

expression.addEventListener('focus', () => expression.blur()
);