"use strict";

//Reloj de cuco (loop)

for (let hora = 0; hora <= 24; hora++) {
  if (hora >= 8 && hora <= 22) {
    console.log(`Son las ${hora} horas.`);
    switch (hora) {
      case 12:
        console.log(`cucú`);

      case 11:
        console.log(`cucú`);

      case 10:
        console.log(`cucú`);

      case 9:
        console.log(`cucú`);
      case 8:
        console.log(`cucú cucú cucú cucú cucú cucú cucú cucú`);
        break;
      case 22:
        console.log(`cucú`);
      case 21:
        console.log(`cucú`);
      case 20:
        console.log(`cucú`);
      case 19:
        console.log(`cucú`);
      case 18:
        console.log(`cucú`);
      case 17:
        console.log(`cucú`);
      case 16:
        console.log(`cucú`);
      case 15:
        console.log(`cucú`);
      case 14:
        console.log(`cucú`);
      case 13:
        console.log(`cucú`);
        break;
    }
  }
}
