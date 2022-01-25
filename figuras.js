//funcion area de triangulo isosceles
function calcularAlturaTriangulo() {
  const ladoA = document.getElementById("entradaLadoA");
  const valorLadoA = ladoA.value;
  const ladoB = document.getElementById("entradaLadoB");
  const valorLadoB = ladoB.value;

  if (valorLadoA != valorLadoB) {
    console.error("los lados no son iguales!!! intentelo de nuevo°!");
  } else {
    const altura = Math.sqrt(valorLadoA ^2 - ((valorLadoB ^ 2) / 4));
    alert(altura);
  }
  
}
