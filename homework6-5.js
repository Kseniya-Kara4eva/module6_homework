//Задание 5

function getNumPow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("Введите число x?", '');
let n = prompt("Введите значение степени n?", '');

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( getNumPow(x, n) );
}
