let arr = [2, 5, 11, 4, 22];

let users = [
    {name: "Аня", age: 21},
    {name: "Юра", age: 17},
    {name: "Даня", age: 13},
    {name: "Глеб", age: 11},
    {name: "Петр", age: 20},
];

function sort(arr, func) {
  let result = [...arr];
  for (j = 0; j < result.length; j++) {
    for (let i = 0; i < result.length - 1; i++) {
        if (func(result[i], result[i + 1])) {
            //Меняем местами
            let temp = result[i];
            result[i] = result[i + 1];
            result[i + 1] = temp;
        }
    }
}
return result;
}

console.log(sort(users, function(A, B) {
    // подставляем массив
    return A.name > B.name;
    // < - убывание, > - возрастание..
}));
