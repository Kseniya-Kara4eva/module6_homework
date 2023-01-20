//Задание 4

function getInterval (a,b) {
  let i = setInterval(() => {
    console.log(a++);
    if (a > b) clearInterval(i);
  }, 1000)
}

getInterval(5, 15);
