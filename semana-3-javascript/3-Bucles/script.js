"use strict";

//Reloj de cuco (loop)

let cucus = "";
for (let hora = 1; hora <= 24; hora++) {
  if (hora === 13) {
    cucus = "";
  }
  cucus += " cucú";
  if (hora >= 8 && hora <= 22) {
    console.log(`Son las ${hora} horas. ${cucus}`);
    // switch (hora) {
    //   case 12:
    //     console.log(`cucú`);

    //   case 11:
    //     console.log(`cucú`);

    //   case 10:
    //     console.log(`cucú`);

    //   case 9:
    //     console.log(`cucú`);
    //   case 8:
    //     console.log(`cucú cucú cucú cucú cucú cucú cucú cucú`);
    //     break;
    //   case 22:
    //     console.log(`cucú`);
    //   case 21:
    //     console.log(`cucú`);
    //   case 20:
    //     console.log(`cucú`);
    //   case 19:
    //     console.log(`cucú`);
    //   case 18:
    //     console.log(`cucú`);
    //   case 17:
    //     console.log(`cucú`);
    //   case 16:
    //     console.log(`cucú`);
    //   case 15:
    //     console.log(`cucú`);
    //   case 14:
    //     console.log(`cucú`);
    //   case 13:
    //     console.log(`cucú`);
    //     break;
    // }
  }
}
// Hacer loops de cucú según la hora. Ejemplo: a las 8, 8 console.log(`cucu`)
