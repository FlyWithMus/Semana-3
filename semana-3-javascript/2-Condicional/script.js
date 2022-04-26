"use strict";

const nombre = prompt("Escribe tu nombre, por favor");
const edad = +prompt("Ahora, dime tu edad");

if (edad < 12) {
  console.log(`A ${nombre} le corresponde el descuento infantil.`);
} else if (edad < 30 && edad >= 12) {
  console.log(`A ${nombre} le corresponde el descuento juvenil.`);
} else if (edad > 60) {
  console.log(`A ${nombre} le corresponde el descuento de jubilados.`);
} else {
  console.log(`A ${nombre} no le corresponde ningún descuento.`);
}

// OTRA OPCION:

// switch (true) {
//   case edad < 12:
//     console.log(`A ${nombre} le corresponde el descuento infantil.`);
//     break;
//   case edad >= 12 && edad < 30:
//     console.log(`A ${nombre} le corresponde el descuento juvenil.`);
//     break;
//   case edad > 60:
//     console.log(`A ${nombre} le corresponde el descuento de jubilados.`);
//     break;
//   default:
//     console.log(`A ${nombre} no le corresponde ningún descuento.`);
//     break;
// }
