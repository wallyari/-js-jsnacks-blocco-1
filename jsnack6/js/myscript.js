/*SNACK 6*
 *
   Chiedi un numero di 7 cifre all'utente
   e calcola la somma di tutte le cifre che compongono il numero.
   
 *
 */

const userNum = prompt('Inserisci un numero di 7 cifre');
console.log(userNum);

let sumNum = 0;

if((isNaN(userNum)) || (userNum.length < 7)){
  console.log('Inserisci un numero di 7 cifre');
}

for (let i =0; i < userNum.length; i++){
  sumNum += parseInt(userNum.charAt(i));
}

console.log(sumNum);