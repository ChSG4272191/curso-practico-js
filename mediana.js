//agregando elementos a la lista
const lista1 = [500, 200, 300, 50,12];
//funcion comparar contenido del array
function comparar(a,b){return a-b;}
//ordenando elementos
lista1.sort(comparar);

//encontrando valor mitad de la lista
const mitadLista = parseInt(lista1.length / 2);


//reutilizando funcion calcular la media o el promedio
function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista1 = sumaLista / lista.length;
  return promedioLista1;
}


//funcion para la determinacion de que si la fucion es par o impar
function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}



//calulando mediana 
let mediana;
if (esPar(lista1.length)) {
  const elemento1 = lista1[mitadLista - 1];
  const elemento2 = lista1[mitadLista];

  const promedioElementos = calcularMediaAritmetica([elemento1, elemento2]);
  mediana = promedioElementos;
} else {
  mediana = lista1[mitadLista];
}
