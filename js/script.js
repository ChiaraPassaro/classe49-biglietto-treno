// // Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// // Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// // il prezzo del biglietto è definito in base ai km(0.21 € al km)
// // va applicato uno sconto del 20 % per i minorenni
// // va applicato uno sconto del 40 % per gli over 65.
// // L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo).Questo richiederà un minimo di ricerca.

// // input
// // numero km
// // eta passeggero
// // prezzo base al km 0.21

// const numKm = parseFloat(prompt('Quanti km devi percorrere?'));
// const age = parseInt(prompt("Inserisci l'eta"));

// console.log(!(isNaN(numKm)) && !(isNaN(age)));

// // if (!(isNaN(numKm)) && !(isNaN(age))) {
// //   // console.log(numKm, age);

// //   let price = 0.21 * numKm;

// //   //scontistiche
// //   // 20% minorenni
// //   // 40% over 65

// //   if (age < 18) {
// //     price = price - (price * 20 / 100);
// //     // price -= (price * 20 / 100);
// //     // price = price * 0.8;
// //   } else if (age > 65) {
// //     price = price - (price * 40 / 100);
// //   }

// //   console.log(price.toFixed(2));

// //   // output
// //   // prezzo definitivo
// //   // document.getElementById('result').innerHTML = 'Il prezzo del tuo biglietto' + price.toFixed(2) + 'e';

// //   document.getElementById('result').innerHTML = `Il prezzo del tuo biglietto ${price.toFixed(2)} e`;
// // }


// if (isNaN(numKm) || isNaN(age)) {
//   alert('Hai inserito dei valori non corretti');
// } else {
//   // console.log(numKm, age);

//   let price = 0.21 * numKm;

//   //scontistiche
//   // 20% minorenni
//   // 40% over 65

//   if (age < 18) {
//     price = price - (price * 20 / 100);
//     // price -= (price * 20 / 100);
//     // price = price * 0.8;
//   } else if (age > 65) {
//     price = price - (price * 40 / 100);
//   }

//   console.log(price.toFixed(2));

//   // output
//   // prezzo definitivo
//   // document.getElementById('result').innerHTML = 'Il prezzo del tuo biglietto' + price.toFixed(2) + 'e';

//   document.getElementById('result').innerHTML = `Il prezzo del tuo biglietto ${price.toFixed(2)} e`;
// }


// const nameUser = 'angelo';

// switch (nameUser) {
//   case 'Pippo':
//     alert('ciao Pippo');
//     break;
//   case 'Franco':
//     alert('ciao Franco');
//     break;
//   default:
//     alert('Ciao Utente');
//     break;
// }