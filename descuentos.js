// const precioOriginal= 100;
// const descuento= 15;

// console.log({
// precioOriginal, descuento, porcentajePrecioDeDescuento,precioConDescuento
// })

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioDeDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioDeDescuento) / 100;
  return precioConDescuento;
}

function calcularConDescuento() {
  const cupones = ["holi", "dani", "chr", "sotelo", "culito"];
  const entradaPrecio = document.getElementById("precio");
  const valorprecio = entradaPrecio.value;
  const entradaCupones = document.getElementById("entradaCupon");
  const valorCupon = entradaCupones.value;

  let descuento;

  switch (valorCupon) {
    case cupones[0]:
      descuento = 50;
      break;
    case cupones[1]:
      descuento = 15;
      break;
    case cupones[2]:
      descuento = 30;
      break;
    case cupones[3]:
      descuento = 10;
      break;
    case cupones[4]:
      descuento = 1;
      break;
    default:
      alert("Su cupon no existe!");
      
      descuento = 0;
      break;
  }
  const respuesta = calcularPrecioConDescuento(valorprecio, descuento);

  const resultado = document.getElementById("resultadoPrecio");
  resultado.innerText = "El precio con descuento es: " + respuesta;
}

//cupones
