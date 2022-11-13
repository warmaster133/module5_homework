//   Модуль 5.6 задание 8

let capital = new Map ([
    ["Riga", "Latvia"],
    ["Paris", "France"], 
    ["Berlin", "Germaany"]
  ]);

  for (let pair of capital) {
    console.log(`Ключ = ${pair[0]}, значение = ${pair[1]}`);
  }