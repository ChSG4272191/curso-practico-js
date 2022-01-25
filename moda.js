const lista1 = [
  1, 5, 4, 6, 2, 1, 4, 5, 1, 2, 54, 5, 2, 4, 2, 5, 1, 2, 54, 5, 65, 9, 6, 2, 45,
  5, 2, 1, 1, 1, 1, 1,
];

const lista1Count = {};

lista1.map(function (elemento) {
  if (lista1Count[elemento]) {
    lista1Count[elemento] += +1;
  } else {
    lista1Count[elemento] = 1;
  }
});

const lista1Array = Object.entries(lista1Count).sort(function (a, b) {
  return a[1] - b[1];
});
const moda = lista1Array[lista1Array.length - 1];
